import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from "@angular/material/snack-bar";
import { AlertComponent } from "@shared/alert/alert-component/alert.component";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private readonly ALERT_POSITION_CONFIG: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
  }
  private readonly ALERT_DURATION: number = 3 * 1000;
  private snackBarRef: MatSnackBarRef<any> | undefined

  constructor(private snackBar: MatSnackBar) {
  }

  public error(message: string, autoClose: boolean = true): void {
    this.alert('error', message, autoClose);
  }

  success(message: string, autoClose: boolean = true): void {
    this.alert('success', message, autoClose);
  }

  public clearAlert(): void {
    this.snackBar.dismiss();
  }

  private alert(type: 'success' | 'error', message: string, autoClose: boolean): void {
    const config = {
      ...this.ALERT_POSITION_CONFIG,
      panelClass: `toast-${type}-container`,
      duration: autoClose ? this.ALERT_DURATION : undefined,
      data: { text: message, type }
    };
    this.snackBarRef = this.snackBar.openFromComponent(AlertComponent, config);
  }
}
