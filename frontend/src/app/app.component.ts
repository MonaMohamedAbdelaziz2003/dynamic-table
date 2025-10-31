import { Component } from '@angular/core';
import { DatasheetComponent } from "./components/datasheet/datasheet.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatasheetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DynamicForm';

}
