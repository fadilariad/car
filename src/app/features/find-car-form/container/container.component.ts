import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  // form: FormGroup | undefined
  constructor(
    // private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.formBuilder.group({
    //   fullName: [Validators.required],
    //   gender: [Validators.required],
    //   email: [Validators.required],
    //   birthDate: [Validators.required],
    //   address: [Validators.required],
    //   city: [Validators.required],
    //   country: [Validators.required],
    //   seats: [Validators.required],
    //   color: [Validators.required],
    //   motorType: [Validators.required],
    // })
  }

}
