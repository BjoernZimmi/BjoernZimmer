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

  selectedCountry!: Country;

  menubarItems: MenuItem[] = [];

  countries: Country[] = [
    { code: 'DE', name: 'DE' },
    { code: 'GB', name: 'EN' },
  ];

  constructor() {}

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
    console.log('Flag clicked:', country);
  }

}

interface Country {
  code: string;
  name: string;
}
