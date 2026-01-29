import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'


@Component({
    selector: 'app-projects',
    templateUrl: './projects.html',
    styleUrl: './projects.css',
    imports: [
        RouterLink
    ]
})
export class Projects {
    projects: IProject[] = [
        {
            title: '_caae',
            image: 'assets/projects/caae.png',
            description: 'Migration of a Windows Forms application to a modern Angular web application.'
        },
        {
            title: '_provalliance',
            image: 'assets/projects/provalliance.png',
            description: 'Scheduler Angular application for managing appointments and resources.'
        },
        {
            title: '_sener-navigation-app',
            image: 'assets/projects/senner.png',
            description: 'Navigation app built with MAUI for logistics and transportation management.'
        },
    ];
}

export interface IProject {
    title: string;
    image: string;
    description: string;
}
