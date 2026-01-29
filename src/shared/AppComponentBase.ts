import {inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export class AppComponentBase {
    translateService = inject(TranslateService);

    languages = ['es', 'en'];
    selectedLanguage = 'es';

    constructor() {
        this.translateService.addLangs(this.languages);
        this.translateService.setFallbackLang(this.selectedLanguage);
    }

    changeLanguage(lang: string) {
        // save on local storage
        localStorage.setItem('lang', lang);
        this.selectedLanguage = lang;
        this.translateService.use(lang);
    }
}
