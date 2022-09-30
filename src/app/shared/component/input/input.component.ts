import { Component, Input, OnInit } from '@angular/core';
import {  FormControl } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() required: boolean = true;
  // @ts-ignore
  @Input() control: FormControl;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  ngOnInit(): void {
  }
}
