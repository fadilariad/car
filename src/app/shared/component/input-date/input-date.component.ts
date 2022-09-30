import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent implements OnInit {
  @Input() required: boolean = true;
  // @ts-ignore
  @Input() control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
