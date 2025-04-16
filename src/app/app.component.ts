import { Component } from '@angular/core';
import { HeaderMenuComponent } from "./layers/header-menu/header-menu.component";

@Component({
  selector: 'app-root',
  imports: [HeaderMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FRONT';
}
