import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title: string = ''; // Entrada para el texto del título
}