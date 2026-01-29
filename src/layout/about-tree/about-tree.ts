import { Component, input, output } from '@angular/core'
import { AboutTreeNode } from './about-tree-node/about-tree-node'

@Component({
  selector: 'app-about-tree',
    imports: [
        AboutTreeNode
    ],
  templateUrl: './about-tree.html',
  styleUrl: './about-tree.sass',
})
export class AboutTree {
    options = input<IAboutTree[]>([]);
    onContentClick = output<string>();

    onOptionClick(option: IAboutTree) {
        if (option.content) {
            this.onContentClick.emit(option.content);
        }
        option.extended = !option.extended;
    }
}

export class IAboutTree {
    title: string = '';
    content?: string;
    children?: IAboutTree[];
    extended?: boolean;
}
