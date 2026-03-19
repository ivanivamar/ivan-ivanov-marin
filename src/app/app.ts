import {ChangeDetectionStrategy, Component, OnInit, signal, inject, OnDestroy} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppComponentBase} from '../shared/AppComponentBase';
import {CustomCursor} from '../shared/layout/custom-cursor/custom-cursor';
import {LenisService} from '../shared/services/lenis.service';
import {Nav} from '../shared/layout/nav/nav';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CustomCursor, Nav],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.Eager
})
export class App extends AppComponentBase implements OnInit, OnDestroy {
    protected readonly title = signal('ivan-ivanov-marin');
    private readonly lenisService = inject(LenisService);

    ngOnInit() {
        // Initialize Lenis
        this.lenisService.init();

        // get language from local storage
        this.selectedLanguage = localStorage.getItem('lang') || 'es';
        // set language
        this.changeLanguage(this.selectedLanguage);
    }

    ngOnDestroy() {
        this.lenisService.destroy();
    }
}
