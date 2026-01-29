import {Component, computed, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LanguageMenu} from './language-menu/language-menu';
import {AppComponentBase} from '../../shared/AppComponentBase';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
    imports: [
        RouterLink,
        RouterLinkActive,
        LanguageMenu,
        TranslatePipe
    ],
  templateUrl: './nav.html',
  styleUrl: './nav.sass',
})
export class Nav extends AppComponentBase {
    isMenuOpen = signal<boolean>(false);

    readonly brand = 'ivan-ivanov';

    readonly navItems = [
        { label: 'hello', path: '/hello' },
        { label: 'about-me', path: '/about' },
        { label: 'projects', path: '/projects' },
    ];

    readonly contactItem = { label: 'contact-me', path: '/contact' };

    // distinctComputed or just a helper to combine lists for the drawer
    readonly drawerItems = computed(() => [...this.navItems, this.contactItem]);

    toggleMenu() {
        this.isMenuOpen.update(value => !value);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }
}
