import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { UserForm } from "../../../../shared/interfeces/forms";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() form: FormGroup<UserForm> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
