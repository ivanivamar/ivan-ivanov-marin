import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import {AppComponentBase} from '../../shared/AppComponentBase';
import {TranslatePipe} from '@ngx-translate/core';


@Component({
    selector: 'app-projects',
    templateUrl: './projects.html',
    styleUrl: './projects.css',
    imports: [
        RouterLink,
        TranslatePipe
    ]
})
export class Projects extends AppComponentBase {
    projects: IProject[] = [
        {
            title: '_caae',
            url: 'caae',
            image: 'assets/projects/caae.png',
            description: 'projects.caae_description',
            technologies: 'projects.caae_technologies'
        },
        {
            title: '_provalliance',
            url: 'provalliance',
            image: 'assets/projects/provalliance.png',
            description: 'projects.provalliance_description',
            technologies: 'projects.provalliance_technologies'
        },
        {
            title: '_sener-navigation-app',
            url: 'sener-navigation-app',
            image: 'assets/projects/senner.png',
            description: 'projects.sener_navigation_app_description',
            technologies: 'projects.sener_navigation_app_technologies'
        },
    ];
}

export interface IProject {
    title: string;
    url: string;
    image: string;
    description: string;
    technologies: string;
}
