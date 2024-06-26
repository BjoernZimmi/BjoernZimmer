import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { environments } from "../../../environments/environment";
import { Observable } from "rxjs";

export class CustomTranslateHttpLoader implements TranslateLoader {


    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<any> {
        let baseUrl: string;

        if (environments.production === false) {
            baseUrl = `../../../assets/files-to-remove/`
            return this.http.get(`${baseUrl}${lang}.json`);
        }
        else {
            baseUrl = `${environments.apiPath}language-data?lang=`
            return this.http.get(`${baseUrl}${lang}`);
        }
    }
}