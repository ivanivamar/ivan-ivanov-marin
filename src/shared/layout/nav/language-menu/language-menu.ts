import {Component, ElementRef, HostListener, inject, signal} from '@angular/core';
import {AppComponentBase} from '../../../shared/AppComponentBase';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-language-menu',
    imports: [
        UpperCasePipe
    ],
  templateUrl: './language-menu.html',
  styleUrl: './language-menu.sass',
})
export class LanguageMenu extends AppComponentBase {
    private elementRef = inject(ElementRef);
    showMenu = signal<boolean>(false);

    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeMenu();
        }
    }

    toggleMenu() {
        this.showMenu.update(value => !value);
    }

    closeMenu() {
        this.showMenu.set(false);
    }
}
