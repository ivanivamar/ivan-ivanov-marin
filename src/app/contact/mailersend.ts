import {inject, Injectable} from '@angular/core';
import {email} from '@angular/forms/signals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Mailersend {
    baseUrl = 'https://api.mailersend.com/v1/';
    httpClient: HttpClient = inject(HttpClient);
    token = 'YOUR_API_TOKEN_HERE';

    sendEmail(data: any) {
        const url = this.baseUrl + 'email';
        return this.httpClient.post(url, data);
    }
}
