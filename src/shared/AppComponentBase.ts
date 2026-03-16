import {inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export class AppComponentBase {
    translateService = inject(TranslateService);

    languages = ['es', 'en'];
    selectedLanguage = 'es';

    constructor() {
        this.translateService.addLangs(this.languages);
        this.getLanguage();
    }

    getLanguage() {
        const lang = localStorage.getItem('lang') || 'es';
        this.translateService.setFallbackLang(lang);
        this.selectedLanguage = lang;
        this.translateService.use(lang);
        return lang;
    }

    changeLanguage(lang: string) {
        // save on local storage
        localStorage.setItem('lang', lang);
        this.selectedLanguage = lang;
        this.translateService.use(lang);
    }
}
