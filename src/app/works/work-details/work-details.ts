import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {SectionAnimationDirective} from '../../../shared/directives/section-animation.directive';
import {Project, projects} from '../works';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-work-details',
    imports: [
        SectionAnimationDirective,
        RouterLink,
        TranslatePipe,
        NgClass
    ],
    templateUrl: './work-details.html',
    styleUrl: './work-details.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkDetails {
    private route = inject(ActivatedRoute);
    // get the current project from the url with the title
    protected readonly project = projects().find(p => p.title === this.route.snapshot.paramMap.get('title'));

    constructor() {
        console.log(this.route.snapshot);
    }
}
