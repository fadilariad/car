import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CarForm, UserForm } from "../../../shared/interfeces/forms";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  userForm = new FormGroup<UserForm>({
    fullName: new FormControl('h', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('hh@g.cvge', [Validators.required, Validators.email]),
    birthDate: new FormControl('h', Validators.required),
    address: new FormControl('h', Validators.required),
    city: new FormControl('h', Validators.required),
    country: new FormControl('h', Validators.required),

  });

  carForm = new FormGroup<CarForm>({
    seats: new FormControl('2', Validators.required),
    color: new FormControl('', Validators.required),
    motorType: new FormControl('', Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
