import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { take } from "rxjs";

@Component({
  selector: 'app-number-count',
  templateUrl: './number-count.component.html',
  styleUrls: ['./number-count.component.css']
})
export class NumberCountComponent implements OnInit {
  @Input() number: number = 0
  constructor() { }
  interval: any;
  ngOnInit(): void {
    this.interval = interval(30).pipe(
      take(this.number + 1)
    )
  }

}
