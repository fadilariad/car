import { Component, OnInit } from '@angular/core';
import { AppStateService } from "@state/app-state.service";
import { Observable } from "rxjs";
import { Choice } from "@shared/interfeces/choice";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  choices$: Observable<Choice[]> = this.state.choices;
  constructor(private state: AppStateService) { }
  public graph = {
    data: [
      { x: [1, 2, 3], y: [2, 6, 3], mode: 'lines+points', marker: {color: 'red'} },
    ],
    layout: {width: 500, height: 500, title: 'A Fancy Plot'}
  };
  ngOnInit(): void {
  }

}
