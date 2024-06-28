import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { version } from 'process';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  
  constructor() {}

  getVersion() {
    const version = environment.version;
    return version;
  }

}
