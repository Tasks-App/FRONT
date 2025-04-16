import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-centered-container',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './centered-container.component.html',
  styleUrls: ['./centered-container.component.scss']
})
export class CenteredContainerComponent {}