import { Component, OnInit, VERSION } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation/translation.service';



@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './startpage.component.html',
  styles: ``
})

export class StartpageComponent implements OnInit {
  angularVersion = VERSION.full;

  constructor(private translationService: TranslationService, private translate: TranslateService){}

  ngOnInit(): void {
    this.translationService.useLanguage('de');

  }

}
