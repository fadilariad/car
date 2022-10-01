import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MIN_YEARS_USER_OLD } from "@shared/constans";

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent implements OnInit {
  @Input() required: boolean = true;
  // @ts-ignore
  @Input() control: FormControl;
  today: Date = new Date();
  maxBirthDate: Date = new Date(
    this.today.getUTCFullYear() - MIN_YEARS_USER_OLD,
    this.today.getMonth(),
    this.today.getDate()
  )
  constructor() { }

  ngOnInit(): void {
  }

}
