import {ChangeDetectionStrategy, Component, computed, effect, ElementRef, viewChild} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {currentProject} from '../image-wrapper/image-wrapper';
import {Project, projects} from '../works';
import {SectionAnimationDirective} from '../../../shared/directives/section-animation.directive';
import {gsap} from 'gsap';

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
    protected readonly projects = projects;
    protected readonly currentProject = currentProject;

    // Reference to the index element for GSAP
    private indexElement = viewChild<ElementRef>('projectIndex');

    // Computed signal for the 1-based index
    protected readonly currentIndex = computed(() => {
        const current = currentProject();
        return this.projects().findIndex(p => p.title === current.title) + 1;
    });

    constructor() {
        effect(() => {
            // Access currentProject to trigger the effect on change
            const index = this.currentIndex();
            const indexEl = this.indexElement()?.nativeElement;

            if (indexEl) {
                const tl = gsap.timeline();

                // Fade in the description wrapper
                tl.to('.description-wrapper', {
                    opacity: 0,
                    duration: 0,
                }).to('.description-wrapper', {
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.inOut',
                }, "<");
                // Scroll animation to change the current index
                tl.to('.current-project-index', {
                    y: -20,
                    opacity: 0,
                    duration: 0,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        indexEl.innerText = index.toString();
                        gsap.set('.current-project-index', {y: 20});
                    }
                }).to('.current-project-index', {
                    y: 0,
                    opacity: 1,
                    duration: 0.2,
                    ease: 'power2.inOut'
                });
            }
        });
    }
}
