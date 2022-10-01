import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ChoiceCarForm } from "@shared/interfeces/forms";
import { ActionsService } from "@actions/actions.service";
import { NewCarChoice, NewLandingPageVisit } from "@actions/app-actions";
import { Choice } from "@shared/interfeces/choice";
import { AlertService } from "@shared/alert/alert.service";
import { MIN_CAR_SEATS } from "@shared/constans";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  choiceCarForm = new FormGroup<ChoiceCarForm>({
    fullName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    seats: new FormControl(MIN_CAR_SEATS, Validators.required),
    color: new FormControl('', Validators.required),
    motorType: new FormControl('', Validators.required),
  })

  selectedHobbies: number[] = [];

  constructor(
    private actions: ActionsService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.actions.dispatch(new NewLandingPageVisit());
  }

  onSubmit() {
    if (this.choiceCarForm.valid) {
      this.actions.dispatch(new NewCarChoice({ ...this.choiceCarForm.value, hobbies: this.selectedHobbies } as Choice));
      this.alert.success(`check your mail - ${this.choiceCarForm.controls.email.value}`, false);
    }
  }
}
