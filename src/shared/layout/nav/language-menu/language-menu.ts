import {AfterViewInit, Component, ElementRef, inject, Renderer2} from '@angular/core';
import {AppComponentBase} from '../../../AppComponentBase';

@Component({
    selector: 'app-language-menu',
    templateUrl: './language-menu.html',
    styleUrl: './language-menu.sass',
})
export class LanguageMenu extends AppComponentBase implements AfterViewInit {
    private elementRef = inject(ElementRef);
    private renderer = inject(Renderer2);

    ngAfterViewInit() {
        this.moveToggleButtonSelector();
    }

    moveToggleButtonSelector() {
        setTimeout(() => {
            const toggleButtonItem = this.renderer.selectRootElement('.toggle-button-item.active', true) as HTMLElement;
            const toggleButtonSelector = this.renderer.selectRootElement('.toggle-button-selector', true) as HTMLElement;

            if (toggleButtonItem && toggleButtonSelector) {
                const rect = toggleButtonItem.getBoundingClientRect();
                const parentRect = this.elementRef.nativeElement.getBoundingClientRect();
                let left = rect.left - parentRect.left;
                if (left === 1) {
                    left = 0;
                }
                toggleButtonSelector.style.transform = `translateX(${left}px)`;
            }
        }, 0);
    }
}
