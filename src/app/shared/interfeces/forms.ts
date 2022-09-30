import { FormControl } from "@angular/forms";

export interface UserForm {
  fullName: FormControl;
  gender: FormControl;
  email: FormControl;
  birthDate: FormControl;
  address: FormControl;
  city: FormControl;
  country: FormControl;
}

export interface CarForm {
  seats: FormControl;
  color: FormControl;
  motorType: FormControl;
}

export type ChoiceCarForm = UserForm & CarForm
