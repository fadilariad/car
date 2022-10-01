import { Choice } from "@shared/interfeces/choice";

export class NewLandingPageVisit {}

export class NewCarChoice {
  constructor(public payload: Choice) {
  }
}

export class SelectColor {
  constructor(public payload: string) {
  }
}

export class InitSelectedColor {}

export type Action = NewLandingPageVisit | NewCarChoice | SelectColor | InitSelectedColor
