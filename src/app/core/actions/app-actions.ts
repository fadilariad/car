export class NewLandingPageVisit {}
export class NewCarChoice {
  constructor(public payload: any) {
  }
}

export type Action = NewLandingPageVisit | NewCarChoice
