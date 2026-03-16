import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Mailersend} from './mailersend';

@Component({
    selector: 'app-contact',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './contact.html',
    styleUrl: './contact.css',
})
export class Contact {
    service = inject(Mailersend);

    contactForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl('', Validators.required),
        message: new FormControl(''),
    });

    sendMail() {

    }
}
