import {ChangeDetectionStrategy, Component, OnInit, signal, inject, OnDestroy} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {AppComponentBase} from '../shared/AppComponentBase';
import {CustomCursor} from '../shared/layout/custom-cursor/custom-cursor';
import {LenisService} from '../shared/services/lenis.service';
import {Nav} from '../shared/layout/nav/nav';
import {Footer} from '../shared/layout/footer/footer';
import {filter, Subject, takeUntil} from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CustomCursor, Nav, Footer],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.Eager
})
export class App extends AppComponentBase implements OnInit, OnDestroy {
    protected readonly title = signal('ivan-ivanov-marin');
    private readonly lenisService = inject(LenisService);
    private readonly router = inject(Router);
    private readonly destroy$ = new Subject<void>();

    ngOnInit() {
        // Initialize Lenis
        this.lenisService.init();

        this.router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
                takeUntil(this.destroy$)
            )
            .subscribe(() => {
                this.lenisService.instance?.scrollTo(0, {
                    immediate: true
                });
            });

        // get language from local storage
        this.selectedLanguage = localStorage.getItem('lang') || 'es';
        // set language
        this.changeLanguage(this.selectedLanguage);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.lenisService.destroy();
    }
}
