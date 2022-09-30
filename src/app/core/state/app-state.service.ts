import { Injectable } from '@angular/core';
import { State } from "./state";
import { Observable } from "rxjs";
import { Choice } from "@shared/interfeces/choice";

interface AppState {
  landingPageVisits: number;
  choices: Choice[]
}

const INIT_APP_STATE: AppState = {
  landingPageVisits: 0,
  choices: JSON.parse(localStorage.getItem('app_car_choices') || '[]')
}
@Injectable({
  providedIn: 'root'
})
export class AppStateService extends State<AppState>{
  landingPageVisits: Observable<number> = this.select(state => state.landingPageVisits);
  choices: Observable<Choice[]> = this.select(state => state.choices);
  constructor() {
    super(INIT_APP_STATE);
  }

  newLandingPageVisit(): void {
    this.setState({
      ...this.state,
      landingPageVisits: this.state.landingPageVisits + 1
    })
  }

  newChoice(newChoice: Choice): void {

    const choices: Choice[] = this.state.choices;
    choices.push(newChoice);
    this.setState({
      ...this.state,
      choices
    })
    this.saveChoiceToLocalStorage(choices)
  }

  private saveChoiceToLocalStorage(choices: Choice[]): void {
   localStorage.setItem('app_car_choices', JSON.stringify(choices))
  }

}
