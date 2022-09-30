import { Choice } from "@shared/interfeces/choice";

export class NewLandingPageVisit {}

export class NewCarChoice {
  constructor(public payload: Choice) {
  }
}


export type Action = NewLandingPageVisit | NewCarChoice
