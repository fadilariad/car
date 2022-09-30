import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ChoiceCarForm } from "@shared/interfeces/forms";
import { ActionsService } from "@actions/actions.service";
import { NewCarChoice } from "@actions/app-actions";
import { Choice } from "@shared/interfeces/choice";
import { AlertService } from "@shared/alert/alert.service";

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
    seats: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    motorType: new FormControl('', Validators.required),
  })

  constructor(
    private actions: ActionsService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.choiceCarForm.valid) {
      this.actions.dispatch(new NewCarChoice({...this.choiceCarForm.value} as Choice));
      this.alert.success('check your mail', false);
    }
  }
}
