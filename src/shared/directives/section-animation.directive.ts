import {Directive, ElementRef, inject, AfterViewInit, OnDestroy} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Directive({
    selector: 'section',
})
export class SectionAnimationDirective implements AfterViewInit, OnDestroy {
    private readonly element = inject(ElementRef);
    private scrollTrigger?: ScrollTrigger;

    ngAfterViewInit() {
        gsap.registerPlugin(ScrollTrigger);

        const animation = gsap.from(this.element.nativeElement, {
            opacity: 0,
            duration: 10,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: this.element.nativeElement,
                start: '200px 80%',
                toggleActions: 'play none none none',
            },
        });

        this.scrollTrigger = animation.scrollTrigger;

        // Ensure ScrollTrigger updates after initialization
        ScrollTrigger.refresh();
    }

    ngOnDestroy() {
        if (this.scrollTrigger) {
            this.scrollTrigger.kill();
        }
    }
}
