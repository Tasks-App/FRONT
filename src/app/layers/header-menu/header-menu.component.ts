import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
