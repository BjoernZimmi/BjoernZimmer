import { Component } from '@angular/core';
import { VERSION } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './startpage.component.html',
  styles: ``
})

export class StartpageComponent {
  angularVersion = VERSION.full;

  constructor(){}

}
