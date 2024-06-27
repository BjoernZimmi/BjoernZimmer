import { Injectable, Inject, PLATFORM_ID, signal, Signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private browserLanguageSignal = signal<string>('de');
  private jsonDataSignal = signal<any>(null);

  constructor(
    public translate: TranslateService,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialisiert die Standardsprache des Browsers
    this.initializeDefaultLanguage();
    this.loadJsonData(this.browserLanguageSignal());
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
    this.loadJsonData(language);
  }

  getCurrentLanguage(): Signal<string> {
    return this.browserLanguageSignal;
  }

  getJsonData(): Signal<any> {
    return this.jsonDataSignal;
  }

  private loadJsonData(language: string): void {
    this.http.get<any>(`${environment.apiPath}language-data?lang=${language}`).subscribe(
      data => this.jsonDataSignal.set(data),
      error => console.error('Error fetching JSON data', error)
    );
  }

}
