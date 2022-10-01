import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActionsService } from "@actions/actions.service";
import { InitSelectedColor, SelectColor } from "@actions/app-actions";

@Component({
  selector: 'app-color-vs-age',
  templateUrl: './color-vs-age.component.html',
  styleUrls: ['./color-vs-age.component.css']
})
export class ColorVsAgeComponent implements OnInit, OnDestroy {
  @Input() colors: string[] = [];
  selectedColor: string = '';
  private readonly CHART_TITLE = 'age vs color'

  constructor(private actions: ActionsService) {
  }

  private _graph: any;

  get graph() {
    return this._graph;
  }

  @Input() set ageColorCount(v: { usersAgeArray: string[], colorCount: number[] }) {
    this._graph = {
      data: [
        { x: v.usersAgeArray, y: v.colorCount, type: 'bar' },
      ],
      layout: { width: 400, height: 400, title: this.CHART_TITLE }
    };
  }

  ngOnInit(): void {
  }

  onSelectColorChange(e: any): void {
    this.actions.dispatch(new SelectColor(e.value ? e.value : ''))

  }

  ngOnDestroy() {
    this.actions.dispatch(new InitSelectedColor());
  }

}
