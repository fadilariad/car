import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() required: boolean = true;
  // @ts-ignore
  @Input() control: FormControl;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  color: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: string) {
    this.color = e;
    this.control.setValue(e);
  }
}
