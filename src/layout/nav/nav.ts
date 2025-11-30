import {Component, computed, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './nav.html',
  styleUrl: './nav.sass',
})
export class Nav {
    isMenuOpen = signal<boolean>(false);

    readonly brand = 'ivan-ivanov';

    readonly navItems = [
        { label: '_hello', path: '/hello' },
        { label: '_about-me', path: '/about' },
        { label: '_projects', path: '/projects' },
    ];

    readonly contactItem = { label: '_contact-me', path: '/contact' };

    // distinctComputed or just a helper to combine lists for the drawer
    readonly drawerItems = computed(() => [...this.navItems, this.contactItem]);

    toggleMenu() {
        this.isMenuOpen.update(value => !value);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }
}
