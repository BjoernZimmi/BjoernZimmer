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
  @ViewChild('dropdownTemplate') dropdownTemplate!: TemplateRef<any>;

  selectedCountry!: Country;
  selectedLanguage: 'en' | 'de' = 'en';

  menubarItems: MenuItem[] = [];

  onCountrySelect(country: Country) {
    this.selectedCountry = country;
  }

  countries: Country[] = [
    { code: 'DE', name: { en: 'Germany', de: 'Deutschland' } },
    { code: 'EN', name: { en: 'English', de: 'Englisch' } },
  ];


  get displayCountries() {
    return this.countries.map(country => ({
      ...country,
      displayName: country.name[this.selectedLanguage]
    }));
  }

  ngOnInit(): void {
    if (this.displayCountries) {
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
        },
        {
          label: 'Country',
          items: this.displayCountries.map(country => ({
            label: country.displayName,
            command: () => {
              this.selectedCountry = country;
              this.onCountrySelect(country);
            }
          }))
        }
      ];
    }
  }


}

interface Country {
  code: string;
  name: { [key: string]: string };


}