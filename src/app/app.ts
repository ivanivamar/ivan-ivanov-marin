import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Nav} from '../layout/nav/nav';
import {AppComponentBase} from '../shared/AppComponentBase';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Nav],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App extends AppComponentBase {
    protected readonly title = signal('ivan-ivanov-marin');

    ngOnInit() {
        // get language from local storage
        this.selectedLanguage = localStorage.getItem('lang') || 'es';
        // set language
        this.changeLanguage(this.selectedLanguage);
    }
}
