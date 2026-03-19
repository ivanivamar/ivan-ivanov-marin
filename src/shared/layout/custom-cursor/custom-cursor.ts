import {
    ChangeDetectionStrategy,
    Component,
    computed, inject, Renderer2,
    signal,
} from '@angular/core';

@Component({
    selector: 'app-custom-cursor',
    template: '<div id="cursor" class="custom-cursor" [style.transform]="transform()"></div>',
    styleUrl: './custom-cursor.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(window:mousemove)': 'onMouseMove($event)',
        '(window:mouseover)': 'onMouseOver($event)',
        '(window:mouseout)': 'onMouseOut($event)',
    },
})
export class CustomCursor {
    private readonly position = signal({x: 0, y: 0});
    private renderer = inject(Renderer2);

    isOnButton = false;

    protected readonly transform = computed(() => {
        const {x, y} = this.position();
        return `translate3d(${x}px, ${y}px, 0)`;
    });

    protected onMouseMove(event: MouseEvent): void {
        if (!this.isOnButton) {
            this.position.set({x: event.clientX, y: event.clientY});
        }
    }

    // on hover links and buttons, increase height and width of cursor
    protected onMouseOver(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A') {
            const cursor = this.renderer.selectRootElement('#cursor', true);
            if (target.classList.contains('image-wrapper')) {
                // make cursor even larger and add a text inside that says VIEW
                if (cursor) {
                    cursor.style.width = '87px';
                    cursor.style.height = '87px';
                    cursor.innerHTML = '<span class="cursor-text">VIEW</span>';
                }
            } else {
                if (cursor) {
                    cursor.style.width = '40px';
                    cursor.style.height = '40px';
                }
            }
        }

        if (target.tagName === 'BUTTON') {
            // make the cursor take the height and width of the button and the top and left position of the button
            const cursor = this.renderer.selectRootElement('#cursor', true);
            if (cursor) {
                this.isOnButton = true;
                const style = window.getComputedStyle(target);
                const rect = target.getBoundingClientRect();
                cursor.style.width = `${rect.width}px`;
                cursor.style.height = `${rect.height}px`;
                this.position.set({x: rect.left + 12, y: rect.top + 12});
                cursor.style.borderRadius = style.getPropertyValue('border-radius');
                cursor.style.border = 'none';
            }
        }
    }

    // on mouse leave links and buttons, reset height and width of cursor
    protected onMouseOut(event: MouseEvent): void {
        const cursor = this.renderer.selectRootElement('#cursor', true);
        if (cursor) {
            this.isOnButton = false;
            cursor.style.width = '26px';
            cursor.style.height = '26px';
            cursor.style.borderRadius = '420px';
            cursor.style.border = '1px solid #10120E';
            cursor.innerHTML = '';
        }
    }
}
