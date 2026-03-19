import {Component, ChangeDetectionStrategy, signal, computed} from '@angular/core';
import { SectionAnimationDirective } from "../../../shared/directives/section-animation.directive";
import {TranslatePipe} from '@ngx-translate/core';

interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

@Component({
  selector: 'app-work-experience',
    imports: [SectionAnimationDirective, TranslatePipe],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperience {
    experiences = signal<Experience[]>([
        {
            company: 'Accenture',
            role: 'work.experience.role1',
            period: 'work.experience.period1',
            description: 'work.experience.desc1'
        },
        {
            company: 'Aggity',
            role: 'work.experience.role2',
            period: 'work.experience.period2',
            description: 'work.experience.desc2'
        },
    ]);
    activeId = signal(0);
    currentExp = computed(() => this.experiences()[this.activeId()]);
}
