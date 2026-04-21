import {Component, signal} from '@angular/core';
import {ImageWrapper} from './image-wrapper/image-wrapper';
import {WorkDescription} from './work-description/work-description';

export class Project {
    title: string = '';
    displayTitle: string = '';
    description: string = '';
    descriptionDetail: string = '';
    duration: string = '';
    image: string[] = [];
    tools: string[] = [];
    roles: string[] = [];
}

export const projects = signal<Project[]>([
    {
        title: 'wayfind',
        displayTitle: 'work.wayfind.title',
        description: 'work.wayfind.desc',
        descriptionDetail: 'work.wayfind.detail',
        duration: 'work.wayfind.duration',
        image: ['assets/projects/wayfind.png', 'assets/projects/wayfind2.png'],
        tools: ['NextJS', 'Google Maps API', 'Firebase', 'Claude Design'],
        roles: ['Design', 'Frontend', 'Backend']
    },
    {
        title: 'caae',
        displayTitle: 'work.caae.title',
        description: 'work.caae.desc',
        descriptionDetail: 'work.caae.detail',
        duration: 'work.caae.duration',
        image: ['assets/projects/caae.png', 'assets/projects/caae2.png'],
        tools: ['Angular', 'TypeScript', 'SharePoint', 'C#'],
        roles: ['Tech Lead', 'Frontend', 'Backend']
    },
    {
        title: 'sener',
        displayTitle: 'work.senner.title',
        description: 'work.senner.desc',
        descriptionDetail: 'work.senner.detail',
        duration: 'work.senner.duration',
        image: ['assets/projects/senner.png'],
        tools: ['Angular', 'TypeScript', 'Google Maps API', 'C#', 'MAUI'],
        roles: ['Tech Lead', 'Frontend', 'Backend']
    },
    {
        title: 'provalliance',
        displayTitle: 'work.provalliance.title',
        description: 'work.provalliance.desc',
        descriptionDetail: 'work.provalliance.detail',
        duration: 'work.provalliance.duration',
        image: ['assets/projects/provalliance.png', 'assets/projects/provalliance2.png'],
        tools: ['Angular', 'TypeScript', 'DevExtreme', 'C#'],
        roles: ['Frontend']
    },
]);

@Component({
    selector: 'app-works',
    imports: [
        ImageWrapper,
        WorkDescription
    ],
    templateUrl: './works.html',
    styleUrl: './works.sass',
})
export class Works {
}
