import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SectionAnimationDirective} from "../../../shared/directives/section-animation.directive";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-skills',
    imports: [
        SectionAnimationDirective,
        TranslatePipe
    ],
    templateUrl: './skills.html',
    styleUrl: './skills.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
    frontendSkills = [
        'Angular',
        'TypeScript',
        'RxJS',
        'Jest/Jasmine',
        'GSAP',
        'PrimeNG',
    ];

    backendSkills = [
        'C#',
        'SQL',
        'PostgreSQL',
        'TypeScript'
    ];

    toolsSkills = [
        'Firebase',
        'Supabase',
        'Git',
        'Figma'
    ]
}
