import {Component, computed, Signal, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LanguageMenu} from './language-menu/language-menu';
import {AppComponentBase} from '../../shared/AppComponentBase';
import {TranslatePipe} from '@ngx-translate/core';
import {NavDrawer} from './nav-drawer/nav-drawer';

@Component({
  selector: 'app-nav',
    imports: [
        RouterLink,
        RouterLinkActive,
        LanguageMenu,
        TranslatePipe,
        NavDrawer
    ],
  templateUrl: './nav.html',
  styleUrl: './nav.sass',
})
export class Nav extends AppComponentBase {
    readonly brand = 'ivan-ivanov-marin';

    readonly navItems: MenuItem[] = [
        { label: 'hello', path: '/hello' },
        { label: 'about-me', path: '/about-me' },
        { label: 'projects', path: '/projects' },
    ];

    readonly contactItem: MenuItem = { label: 'contact-me', path: '/contact' };

    // distinctComputed or just a helper to combine lists for the drawer
    readonly drawerItems: Signal<MenuItem[]> = computed(() => [...this.navItems, this.contactItem]);
}

export interface MenuItem {
    label: string;
    path: string;
}
