import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Nav} from '../layout/nav/nav';
import {AppComponentBase} from '../shared/AppComponentBase';
import {Footer} from '../layout/footer/footer';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Nav, Footer],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App extends AppComponentBase implements OnInit {
    protected readonly title = signal('ivan-ivanov-marin');

    ngOnInit() {
        // get language from local storage
        this.selectedLanguage = localStorage.getItem('lang') || 'es';
        // set language
        this.changeLanguage(this.selectedLanguage);
    }
}
