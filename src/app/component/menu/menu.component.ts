import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule, DropdownModule, FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  // @ViewChild('dropdownTemplate') dropdownTemplate!: TemplateRef<any>;

  selectedCountry!: Country;
  // selectedLanguage: 'en' | 'de' = 'en';

  menubarItems: MenuItem[] = [];

  countries: Country[] = [
    { code: 'DE', name: { en: 'Germany', de: 'Deutschland' }, flagIcon: 'flag-icon flag-icon-de' },
    { code: 'GB', name: { en: 'United Kingdom', de: 'Vereinigtes Königreich' }, flagIcon: 'flag-icon flag-icon-gb' },
  ];

  // get displayCountries() {
  //   return this.countries.map(country => ({
  //     ...country,
  //     displayName: country.name[this.selectedLanguage],
  //     icon: country.flagIcon
  //   }));
  // }

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
}

interface Country {
  code: string;
  name: { [key: string]: string };
  flagIcon: string;
}
