import { Component } from '@angular/core';
import {Home} from './home/home';
import {WorkExperience} from './work-experience/work-experience';
import {Skills} from './skills/skills';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.html',
    styleUrl: './landing-page.sass',
    imports: [
        Home,
        WorkExperience,
        Skills
    ]
})
export class LandingPage {

}
