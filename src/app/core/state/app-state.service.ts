import { Injectable } from '@angular/core';
import { State } from "./state";
import { Observable } from "rxjs";
import { Choice } from "@shared/interfeces/choice";
import { localStorageKeysName } from "@shared/constans";

interface AppState {
  landingPageVisits: number;
  choices: Choice[];
  selectedColor: string;
}

const INIT_APP_STATE: AppState = {
  landingPageVisits: JSON.parse(localStorage.getItem(localStorageKeysName.visits) || '0'),
  choices: JSON.parse(localStorage.getItem(localStorageKeysName.choices) || '[]'),
  selectedColor: ''
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService extends State<AppState> {
  landingPageVisits$: Observable<number> = this.select(state => state.landingPageVisits);
  choices$: Observable<Choice[]> = this.select(state => state.choices);
  ageVSColor$: Observable<{usersAgeArray: string[], colorCount: number[]}> = this.select(state => this.getColorsByAge(state));
  colors$: Observable<string[]> = this.select(state => [...new Set(state.choices.map(choice => choice.color))])
  constructor() {
    super(INIT_APP_STATE);
  }


  newLandingPageVisit(): void {
    const landingPageVisits = this.state.landingPageVisits + 1;
    this.setState({
      ...this.state,
      landingPageVisits
    });
    AppStateService.saveToLocalStorage(localStorageKeysName.visits, landingPageVisits);
  }

  newChoice(newChoice: Choice): void {
    const choices: Choice[] = this.state.choices;
    choices.push(newChoice);
    this.setState({
      ...this.state,
      choices
    });
    AppStateService.saveToLocalStorage(localStorageKeysName.choices, choices);
  }

  updateSelectedColor(color: string) {
    this.setState({
      ...this.state,
      selectedColor: color
    });
  }

  initSelectedColor() {
    this.setState({
      ...this.state,
      selectedColor: ''
    })
  }

  getColorsByAge(appState: AppState): {usersAgeArray: string[], colorCount: number[]} {
    const ages: Record<number, string[]> = {}
    appState.choices.forEach(choice => {
      const userAge = this.getAgeByBirthDate(choice.birthDate);
      if (ages[userAge]) {
        ages[userAge].push(choice.color);
      } else {
        ages[userAge] = [choice.color];
      }
    })
    const usersAgeArray: string[] = Object.keys(ages).filter((age) => ages[+age].filter((color => color === appState.selectedColor)).length > 0);
    const colorCount: number[] = usersAgeArray.map(userAge => ages[+userAge].filter((color => color === appState.selectedColor)).length)
    return {usersAgeArray, colorCount}
  }

  getAgeByBirthDate(birthDate: Date): number {
    const timeDiff = Math.abs(Date.now() - new Date(birthDate).getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
  }

  static saveToLocalStorage(key: string,value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

}
