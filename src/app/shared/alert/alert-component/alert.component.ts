import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material/snack-bar";

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public msg: {text: string; type: 'success' | 'error'},
    public snackBarRef: MatSnackBarRef<AlertComponent>,
  ) { }

  ngOnInit(): void {
  }

}
