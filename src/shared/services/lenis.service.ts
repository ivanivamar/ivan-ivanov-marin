import {Injectable, NgZone, inject} from '@angular/core';
import Lenis from 'lenis';

@Injectable({
    providedIn: 'root',
})
export class LenisService {
    private readonly ngZone = inject(NgZone);
    private lenis: Lenis | null = null;

    public init(): void {
        this.ngZone.runOutsideAngular(() => {
            this.lenis = new Lenis({
                autoRaf: true,
                lerp: 0.05,
                smoothWheel: true,
                autoResize: true,
                touchMultiplier: 0,
            });
        });
    }

    public get instance(): Lenis | null {
        return this.lenis;
    }

    public destroy(): void {
        if (this.lenis) {
            this.lenis.destroy();
            this.lenis = null;
        }
    }
}
