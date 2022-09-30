import { Injectable } from '@angular/core';
import { AppStateService } from "./app-state.service";
import { ActionsService } from "../actions/actions.service";
import { filter } from "rxjs";
import { NewLandingPageVisit } from "../actions/app-actions";

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
      filter(action => action instanceof NewLandingPageVisit)
    ).subscribe(
      () => {
        this.appState.newLandingPageVisit()
      }
    )
  }
}
