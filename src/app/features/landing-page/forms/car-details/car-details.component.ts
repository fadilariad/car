import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { ChoiceCarForm } from "@shared/interfeces/forms";
import { MAX_CAR_SEATS, MIN_CAR_SEATS } from "@shared/constans";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  @Input() form: FormGroup<ChoiceCarForm> | undefined;
  minSeatsNumber: number = MIN_CAR_SEATS
  maxSeatsNumber: number = MAX_CAR_SEATS
  constructor() { }

  ngOnInit(): void {
  }

}
