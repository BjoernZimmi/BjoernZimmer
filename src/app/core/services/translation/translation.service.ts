import { Injectable, Inject, PLATFORM_ID, signal, Signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private browserLanguageSignal = signal<string>('de');

  constructor(
    public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialisiert die Standardsprache des Browsers
    this.initializeDefaultLanguage();
  }

  private initializeDefaultLanguage(): void {
    let defaultLang = 'de';

    // Überprüft ob der Code im Browser ausgeführt wird
    if (isPlatformBrowser(this.platformId)) {
      
      // Extrahiert den Sprachcode, z.B. 'en' aus 'en-EN'
      const browserLang = navigator.language.split('-')[0]; 
      const supportedLanguages = ['de', 'en'];

      if (supportedLanguages.includes(browserLang)) {
        defaultLang = browserLang;
      }
    }

    this.browserLanguageSignal.set(defaultLang);
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

  useLanguage(language: string): void {
    this.browserLanguageSignal.set(language);
    this.translate.use(language);
  }

  getCurrentLanguage(): Signal<string> {
    return this.browserLanguageSignal;
  }
}
