import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation/translation.service';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './information.component.html',
  styles: ``
})
export class InformationComponent implements OnInit {

  browser!: string;

  constructor(public tranlationService: TranslationService) {

  }

  ngOnInit(): void {
    this.browser = this.tranlationService.setbrowserLanguage();
  }

}