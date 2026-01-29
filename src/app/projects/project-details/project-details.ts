import {ChangeDetectionStrategy, Component, computed, inject, OnInit, signal} from '@angular/core'
import {ActivatedRoute, RouterLink} from '@angular/router'

type Node =
    | { tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; text: string }
    | { tag: 'p'; text: string }
    | { tag: 'img'; src: string; alt?: string }
    | { tag: 'ul' | 'ol'; items: string[] }
    | { tag: 'pre'; text: string };

@Component({
    selector: 'app-project-details',
    imports: [
        RouterLink
    ],
    templateUrl: './project-details.html',
    styleUrl: './project-details.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetails implements OnInit {
    private readonly route = inject(ActivatedRoute);

    contentInput = signal<string | undefined>(undefined);
    private readonly raw = signal<string>('');

    title = '';

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const titleParam = params.get('title');
            if (titleParam) {
                this.title = titleParam;

                // markdown files are stored in 'assets/projects/{title}.md'
                fetch(`assets/projects/${titleParam}.md`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        console.log(response.text);
                        return response.text();
                    })
                    .then(md => {
                        this.raw.set(md);
                    })
                    .catch(error => {
                        console.error('There was a problem with the fetch operation:', error);
                        this.raw.set('# Error\n\nCould not load project details.');
                    });
            }
        });
    }
    // parser: convierte texto en nodos renderizables
    private parse(md: string): Node[] {
        const lines = md.replace(/\r\n/g, '\n').split('\n');
        const nodes: Node[] = [];
        let i = 0;
        let inCode = false;
        let codeBuffer: string[] = [];
        let listBuffer: { type: 'ul' | 'ol'; items: string[] } | null = null;
        while (i < lines.length) {
            const line = lines[i];

            // código bloque triple backticks
            if (line.trim().startsWith('```')) {
                if (!inCode) {
                    inCode = true;
                    codeBuffer = [];
                } else {
                    inCode = false;
                    nodes.push({ tag: 'pre', text: codeBuffer.join('\n') });
                    codeBuffer = [];
                }
                i++;
                continue;
            }
            if (inCode) {
                codeBuffer.push(line);
                i++;
                continue;
            }

            // encabezados
            const hMatch = line.match(/^(#{1,6})\s+(.*)$/);
            if (hMatch) {
                // flush any open list
                if (listBuffer) {
                    nodes.push({ tag: listBuffer.type, items: listBuffer.items });
                    listBuffer = null;
                }
                const level = hMatch[1].length;
                const text = hMatch[2].trim();
                nodes.push({alt: '', src: '', items: [], tag: (`h${level}` as Node['tag']), text });
                i++;
                continue;
            }

            // listas (unordered)
            const ulMatch = line.match(/^\s*[-*]\s+(.*)$/);
            if (ulMatch) {
                const item = ulMatch[1].trim();
                if (!listBuffer) {
                    listBuffer = { type: 'ul', items: [item] };
                } else if (listBuffer.type === 'ul') {
                    listBuffer.items.push(item);
                } else {
                    // flush ordered list then start ul
                    nodes.push({ tag: listBuffer.type, items: listBuffer.items });
                    listBuffer = { type: 'ul', items: [item] };
                }
                i++;
                continue;
            }

            // listas ordered
            const olMatch = line.match(/^\s*\d+\.\s+(.*)$/);
            if (olMatch) {
                const item = olMatch[1].trim();
                if (!listBuffer) {
                    listBuffer = { type: 'ol', items: [item] };
                } else if (listBuffer.type === 'ol') {
                    listBuffer.items.push(item);
                } else {
                    nodes.push({ tag: listBuffer.type, items: listBuffer.items });
                    listBuffer = { type: 'ol', items: [item] };
                }
                i++;
                continue;
            }

            // líneas en blanco separan párrafos y listas
            if (line.trim() === '') {
                if (listBuffer) {
                    nodes.push({ tag: listBuffer.type, items: listBuffer.items });
                    listBuffer = null;
                }
                i++;
                continue;
            }

            // imágenes
            const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
            if (imgMatch) {
                if (listBuffer) {
                    nodes.push({ tag: listBuffer.type, items: listBuffer.items });
                    listBuffer = null;
                }
                const alt = imgMatch[1];
                const src = imgMatch[2];
                nodes.push({ tag: 'img', src, alt });
                i++;
                continue;
            }

            // párrafo: acumular hasta la próxima línea en blanco
            let para = line;
            i++;
            while (i < lines.length && lines[i].trim() !== '') {
                para += '\n' + lines[i];
                i++;
            }
            if (listBuffer) {
                nodes.push({ tag: listBuffer.type, items: listBuffer.items });
                listBuffer = null;
            }
            nodes.push({ tag: 'p', text: para.trim() });
        }

        // cerrar buffers abiertos
        if (inCode && codeBuffer.length) {
            nodes.push({ tag: 'pre', text: codeBuffer.join('\n') });
        }
        if (listBuffer) {
            nodes.push({ tag: listBuffer.type, items: listBuffer.items });
        }

        return nodes;
    }

    // nodo renderizado derivado del raw markdown
    readonly renderedNodes = computed(() => {
        const text = this.raw();
        if (!text) return [] as Node[];
        return this.parse(text);
    });
}
