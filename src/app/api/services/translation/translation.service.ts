import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('de');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
