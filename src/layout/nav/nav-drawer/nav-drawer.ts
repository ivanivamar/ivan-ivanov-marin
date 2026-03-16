import {Component, input, Input, signal} from '@angular/core';
import {MenuItem} from '../nav';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-nav-drawer',
    imports: [
        RouterLink,
        RouterLinkActive,
        TranslatePipe
    ],
    templateUrl: './nav-drawer.html',
    styleUrl: './nav-drawer.sass',
})
export class NavDrawer {
    drawerItems = input<MenuItem[]>();

    isMenuOpen = signal<boolean>(false);

    toggleMenu() {
        this.isMenuOpen.update(value => !value);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }
}
