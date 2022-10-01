import { Component, Input, OnInit } from '@angular/core';
import { Choice } from "@shared/interfeces/choice";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() choices: Choice[] = [];
  @Input() headers: string[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
