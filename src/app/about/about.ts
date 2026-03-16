import {Component} from '@angular/core';
import {MarkdownRenderer} from '../../layout/markdown-renderer/markdown-renderer';

@Component({
    selector: 'app-about',
    templateUrl: './about.html',
    styleUrl: './about.sass',
    imports: [
        MarkdownRenderer
    ]
})
export class About {

}
