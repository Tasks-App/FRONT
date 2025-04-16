import { Component } from '@angular/core';
import { HeaderMenuComponent } from "./layers/header-menu/header-menu.component";
import { CenteredContainerComponent } from './layers/centered-container/centered-container.component';

@Component({
  selector: 'app-root',
  imports: [HeaderMenuComponent, CenteredContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FRONT';
}
