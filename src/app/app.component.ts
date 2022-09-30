import { Component } from '@angular/core';
import { ReducerService } from "./core/state/reducer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car';

  constructor(private reducer: ReducerService,) {
  }
}
