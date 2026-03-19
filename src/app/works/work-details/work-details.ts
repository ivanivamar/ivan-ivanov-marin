import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SectionAnimationDirective} from '../../../shared/directives/section-animation.directive';

@Component({
    selector: 'app-work-details',
    imports: [
        SectionAnimationDirective
    ],
    templateUrl: './work-details.html',
    styleUrl: './work-details.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkDetails {

}
