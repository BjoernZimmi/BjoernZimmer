import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./component/menu/menu.component";
import { FooterComponent } from './component/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MenuComponent, FooterComponent]
})
export class AppComponent {
  title = 'Bjoern_Zimmer';

}
