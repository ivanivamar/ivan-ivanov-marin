import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {SectionAnimationDirective} from "../../../shared/directives/section-animation.directive";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    imports: [SectionAnimationDirective, TranslatePipe],
    templateUrl: './home.html',
    styleUrl: './home.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements AfterViewInit {
    ngAfterViewInit() {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        this.titleTextAnimation();
        this.seeMoreIconAnimation();
    }

    titleTextAnimation() {
        const split = new SplitText(".headline", {type: "chars"});
        const chars = split.chars;

        gsap.from(chars, {
            scrollTrigger: {
                trigger: ".headline",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            stagger: 0.03,
            ease: "power2.out",
            delay: 0.5,
        });
    }

    seeMoreIconAnimation() {
        // make the .see-more icon bounce up and down infinitely
        gsap.to(".see-more", {
            y: -10,
            repeat: -1,
            yoyo: true,
            stagger: 0.1,
            animationDuration: 10000,
            ease: "power2.inOut",
        });
    }
}
