import { Component } from '@angular/core';
import {Intro} from './intro/intro';
import {WorkExperience} from './work-experience/work-experience';
import {Skills} from './skills/skills';

@Component({
    selector: 'app-landing-page',
    templateUrl: './home.html',
    styleUrl: './home.sass',
    imports: [
        Intro,
        WorkExperience,
        Skills
    ]
})
export class Home {

}
