import { Injectable } from '@angular/core';
import { State } from "./state";
import { Observable } from "rxjs";

interface AppState {
  landingPageVisits: number;
  users: any[];
  cars: any[]
}

const INIT_APP_STATE: AppState = {
  landingPageVisits: 0,
  users: [],
  cars: []
}
@Injectable({
  providedIn: 'root'
})
export class AppStateService extends State<AppState>{
  landingPageVisits: Observable<number> = this.select(state => state.landingPageVisits);
  constructor() {
    super(INIT_APP_STATE);
    console.log('init app state')
  }

  newLandingPageVisit() {
    this.setState({
      ...this.state,
      landingPageVisits: this.state.landingPageVisits + 1
    })
  }

}
