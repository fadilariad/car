import { Component, OnInit } from '@angular/core';
import { AppStateService } from "@state/app-state.service";
import { Observable } from "rxjs";
import { Choice } from "@shared/interfeces/choice";
import { map } from "rxjs/operators";
import { MotorType } from "@shared/constans";

@Component({
  selector: 'app-dashboard',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  choices$: Observable<Choice[]> = this.state.choices$;
  totalSubmittedForms$: Observable<number> = this.choices$.pipe(
    map(choices => choices.length)
  );
  fuelEngineCount$: Observable<number> = this.choices$.pipe(
    map(choices => choices.filter(choice => choice.motorType === MotorType.FUEL).length)
  );

  electricEngineCount$: Observable<number> = this.choices$.pipe(
    map(choices => choices.filter(choice => choice.motorType === MotorType.ELECTRIC).length));

  landingPageVisits: Observable<number> = this.state.landingPageVisits$;
  tableHeaders$: Observable<string[]> = this.choices$.pipe(
    map((choices) => choices ? Object.keys(choices[0]) : [])
  )
  ages$: Observable<{ usersAgeArray: string[], colorCount: number[] }> = this.state.ageVSColor$;
  colors$: Observable<string[]> = this.state.colors$;

  constructor(private state: AppStateService) {
  }

  ngOnInit(): void {
  }

  objectKeys(obj: Record<any, any>): any[] {
    return Object.keys(obj)
  }
}
