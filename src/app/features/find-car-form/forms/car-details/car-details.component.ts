import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { CarForm } from "../../../../shared/interfeces/forms";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  @Input() form: FormGroup<CarForm> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
