import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-about-tabs',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './about-tabs.html',
  styleUrl: './about-tabs.sass',
})
export class AboutTabs {

}
