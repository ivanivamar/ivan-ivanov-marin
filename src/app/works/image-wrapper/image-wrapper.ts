import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
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
import {Project, projects} from '../works';

export const currentProject = signal<Project>({
    title: '',
    description: '',
    descriptionDetail: '',
    duration: '',
    image: '',
    tools: [],
    roles: []
});

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
    protected readonly projects = projects;
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
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => this.selectProject(index),
                onEnterBack: () => this.selectProject(index)
            });
        });
    }

    selectProject(index: number) {
        this.activeIndex.set(index);
        currentProject.set(projects()[index]);
    }

    ngOnDestroy() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
}
