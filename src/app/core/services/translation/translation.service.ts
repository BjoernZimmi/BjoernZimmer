import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  browserLanguage!: string;

  constructor(
    public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialisieren Sie die Standardsprache basierend auf dem Kontext (Browser oder nicht)
    this.initializeDefaultLanguage();
  }

  private initializeDefaultLanguage(): void {
    let defaultLang = 'de'; // Standardsprache

    // Überprüfen Sie, ob der Code im Browser ausgeführt wird
    if (isPlatformBrowser(this.platformId)) {
      
      // Extrahiert den Sprachcode, z.B. 'en' aus 'en-US'
      const browserLang = navigator.language.split('-')[0]; 
      const supportedLanguages = ['de', 'en'];

      this.browserLanguage = browserLang;

      if (supportedLanguages.includes(browserLang)) {
        defaultLang = browserLang;
      }
    }

    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  setbrowserLanguage(): string {
    return this.browserLanguage;
  }
}
