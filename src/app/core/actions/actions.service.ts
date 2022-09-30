import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, shareReplay } from "rxjs";
import { Action } from "./app-actions";

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private actionsSubject: ReplaySubject<Action> = new ReplaySubject();
  public getActions$: Observable<Action> = this.actionsSubject.asObservable().pipe(
    shareReplay(1)
  );

  constructor() { }

  public dispatch(action: Action) {
    console.log('%cACTION: ', 'background: green; color: white', action.constructor.name, 'payload' in action ? action.payload : '');
    this.dispatchAction(action);
  }

  private dispatchAction(action: Action) {
    this.actionsSubject.next(action);
  }
}
