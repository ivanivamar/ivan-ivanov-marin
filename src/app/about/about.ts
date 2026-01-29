import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AboutTabs} from './about-tabs/about-tabs';

@Component({
  selector: 'app-about',
    imports: [
        RouterOutlet,
        AboutTabs
    ],
  templateUrl: './about.html',
  styleUrl: './about.sass',
})
export class About {

}
