import {Component, signal} from '@angular/core';
import {ImageWrapper} from './image-wrapper/image-wrapper';
import {WorkDescription} from './work-description/work-description';

export class Project {
    title: string = '';
    description: string = '';
    image: string = '';
}

export const projects = signal<Project[]>([
    {title: 'caae', description: 'work.caae.desc', image: 'assets/projects/caae.png'},
    {title: 'provalliance', description: 'work.provalliance.desc', image: 'assets/projects/provalliance.png'},
    {title: 'senner', description: 'work.senner.desc', image: 'assets/projects/senner.png'},
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
