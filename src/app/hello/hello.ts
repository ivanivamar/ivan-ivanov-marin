import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {AppComponentBase} from '../../shared/AppComponentBase';

@Component({
    selector: 'app-hello',
    imports: [
        TranslatePipe
    ],
    templateUrl: './hello.html',
    styleUrl: './hello.sass'
})
export class Hello extends AppComponentBase {
}
