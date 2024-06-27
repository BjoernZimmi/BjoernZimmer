import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

export class CustomTranslateHttpLoader implements TranslateLoader {


    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<any> {
        let baseUrl: string;

        if (environment.production) {
            baseUrl = `../../../assets/files-to-remove/`;
            console.log('environment.production is: ' + environment.production);
            return this.http.get(`${baseUrl}${lang}.json`);
        }
        else {
            baseUrl = `${environment.apiPath}language-data?lang=`;
            console.log('environment.production is: ' + environment.production);
            return this.http.get(`${baseUrl}${lang}`);
        }
    }
}