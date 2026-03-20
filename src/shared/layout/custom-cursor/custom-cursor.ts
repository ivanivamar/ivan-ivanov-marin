import {
    ChangeDetectionStrategy,
    Component,
    computed, ElementRef, inject, Renderer2,
    signal, viewChild,
} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-custom-cursor',
    templateUrl: './custom-cursor.html',
    styleUrl: './custom-cursor.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(window:mousemove)': 'onMouseMove($event)',
        '(window:mouseover)': 'onMouseOver($event)',
        '(window:mouseout)': 'onMouseOut($event)',
    },
    imports: [
        TranslatePipe
    ]
})
export class CustomCursor {
    private renderer = inject(Renderer2);

    customCursor = viewChild.required<ElementRef>('customCursor');
    customCursorText = viewChild.required<ElementRef>('customCursorText');

    cursorX = signal(0);
    cursorY = signal(0);
    isOnButton = false;

    protected onMouseMove(event: MouseEvent): void {
        if (this.isOnButton) {
            return;
        }

        this.cursorX.set(event.clientX);
        this.cursorY.set(event.clientY);
    }

    protected onMouseOver(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        const cursor = this.renderer.selectRootElement('#cursor', true);

        if (!cursor) {
            return;
        }

        if (target.tagName === 'A') {
            cursor.style.border = 'none';
            if (target.classList.contains('image-wrapper')) {
                cursor.style.transform = 'scale(3)';
                this.customCursorText().nativeElement.style.display = 'block';
            } else {
                cursor.style.transform = 'scale(2)';
            }
        }

        if (target.tagName === 'BUTTON') {
            cursor.style.border = 'none';
            this.isOnButton = true;

            const style = window.getComputedStyle(target);
            const rect = target.getBoundingClientRect();

            cursor.style.width = `${rect.width}px`;
            cursor.style.height = `${rect.height}px`;
            cursor.style.borderRadius = style.getPropertyValue('border-radius');
            this.cursorX.set(rect.left + 12);
            this.cursorY.set(rect.top + 12);
        }
    }

    // on mouse leave links and buttons, reset height and width of cursor
    protected onMouseOut(event: MouseEvent): void {
        const cursor = this.renderer.selectRootElement('#cursor', true);

        if (!cursor) {
            return;
        }

        this.isOnButton = false;
        cursor.style.transform = 'scale(1)';
        cursor.style.borderRadius = '420px';
        cursor.style.border = '1px solid #10120E';
        cursor.style.width = '26px';
        cursor.style.height = '26px';

        this.customCursorText().nativeElement.style.display = 'none';
    }
}
