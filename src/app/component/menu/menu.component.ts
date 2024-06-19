import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation/translation.service';

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
    { code: 'de', name: 'DE' },
    { code: 'en', name: 'EN' },
  ];

  constructor(private translationService: TranslationService) {}

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
    this.translationService.useLanguage(country.code);

  }

}

interface Country {
  code: string;
  name: string;
}
