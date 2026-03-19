import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    OnDestroy,
    signal,
    viewChildren
} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SectionAnimationDirective} from '../../../shared/directives/section-animation.directive';

class Project {
    title: string = '';
    description: string = '';
    image: string = '';
}

export const currentProject = signal<Project>(new Project());

@Component({
    selector: 'app-image-wrapper',
    imports: [
        NgClass,
        RouterLink,
        SectionAnimationDirective
    ],
    templateUrl: './image-wrapper.html',
    styleUrl: './image-wrapper.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageWrapper implements AfterViewInit, OnDestroy {
    projects = signal<Project[]>([
        {title: 'caae', description: 'Detail for 1', image: 'assets/projects/caae.png'},
        {title: 'provalliance', description: 'Detail for 2', image: 'assets/projects/provalliance.png'},
        {title: 'senner', description: 'Detail for 3', image: 'assets/projects/senner.png'},
    ]);
    activeIndex = signal<number>(0);
    imageElements = viewChildren<ElementRef>('projectImage');

    ngAfterViewInit() {
        gsap.registerPlugin(ScrollTrigger);
        this.initScrollTriggers();

        this.selectProject(0);
    }

    private initScrollTriggers() {
        this.imageElements().forEach((ref, index) => {
            ScrollTrigger.create({
                trigger: ref.nativeElement,
                start: 'top 35%',
                end: 'bottom 65%',
                onEnter: () => this.selectProject(index),
                onEnterBack: () => this.selectProject(index),
            });
        });
    }

    selectProject(index: number) {
        this.activeIndex.set(index);
        currentProject.set(this.projects()[index]);
    }

    ngOnDestroy() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
}
