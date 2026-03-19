import {Component, computed, Signal, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LanguageMenu} from './language-menu/language-menu';
import {AppComponentBase} from '../../AppComponentBase';
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
    readonly brand = 'Iván Ivanov Marín';

    readonly navItems: MenuItem[] = [
        { label: 'Home', path: '/' },
        { label: 'Works', path: '/works' },
        { label: 'Contact', path: '/contact' },
    ];
}

export interface MenuItem {
    label: string;
    path: string;
}
