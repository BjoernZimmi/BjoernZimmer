import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styles: ``
})

export class MenuComponent {
  menubarItems: MenuItem[] = [
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
  ]
}
