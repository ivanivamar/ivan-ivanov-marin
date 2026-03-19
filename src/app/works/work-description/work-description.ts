import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {currentProject} from '../image-wrapper/image-wrapper';
import {SectionAnimationDirective} from '../../../shared/directives/section-animation.directive';

@Component({
    selector: 'app-work-description',
    imports: [
        TranslatePipe,
        SectionAnimationDirective
    ],
    templateUrl: './work-description.html',
    styleUrl: './work-description.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkDescription {
    protected readonly currentProject = currentProject;
}
