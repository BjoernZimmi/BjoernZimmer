import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../api/services/translation/translation.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule, DropdownModule, FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styles: ``
})

export class MenuComponent implements OnInit {

  selectedCountry!: Country;

  menubarItems: MenuItem[] = [];

  countries: Country[] = [
    { code: 'DE', name: 'DE' },
    { code: 'EN', name: 'EN' },
  ];

  constructor(private translationService: TranslationService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.menubarItems = [
      {
        label: 'Start',
        routerLink: 'start'
      },
      {
        label: 'Frontend',
        routerLink: 'frontend'
      },
      {
        label: 'Backend',
        routerLink: 'backend'
      }
    ];

  }

  onFlagClick(country: Country): void {
    this.translationService.useLanguage(country.code.toLowerCase());

  }

}

interface Country {
  code: string;
  name: string;
}
