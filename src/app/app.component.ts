import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./component/menu/menu.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MenuComponent]
})
export class AppComponent {
  title = 'Bjoern_Zimmer';

}
