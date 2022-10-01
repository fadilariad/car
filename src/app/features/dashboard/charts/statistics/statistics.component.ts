import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() landingPageVisits: number = 0;
  @Input() landingPageSubmit: number = 0;
  @Input() electricEngine: number = 0;
  @Input() fuelEngine: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

}
