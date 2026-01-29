import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
    projects: IProject[] = [
        {
            title: '_caae',
            image: 'assets/caae.png',
            description: 'Migration of a Windows Forms application to a modern Angular web application.'
        },
        {
            title: '_provalliance',
            image: 'assets/provalliance.png',
            description: 'Scheduler Angular application for managing appointments and resources.'
        },
        {
            title: '_senner-navigation-app',
            image: 'assets/senner.png',
            description: 'Navigation app built with MAUI for logistics and transportation management.'
        },
    ];
}

export interface IProject {
    title: string;
    image: string;
    description: string;
}
