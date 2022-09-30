import { Injectable } from '@angular/core';
import { AppStateService } from "./app-state.service";
import { ActionsService } from "@actions/actions.service";
import { NewCarChoice } from "@actions/app-actions";

@Injectable({
  providedIn: 'root'
})
export class ReducerService {

  constructor(
    private appState: AppStateService,
    private actions: ActionsService
    ) {
    this.reducer();
  }

  reducer() {
    console.log('reducer running ...');

    this.actions.getActions$.pipe(
    ).subscribe(
      (action) => {
      if (action instanceof NewCarChoice) {
        this.appState.newChoice(action.payload);
      }
      }
    )

  }
}
