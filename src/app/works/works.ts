import {Component} from '@angular/core';
import {ImageWrapper} from './image-wrapper/image-wrapper';
import {WorkDescription} from './work-description/work-description';

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
