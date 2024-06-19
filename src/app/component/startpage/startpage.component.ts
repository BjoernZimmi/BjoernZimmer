import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../api/services/translation/translation.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';



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
