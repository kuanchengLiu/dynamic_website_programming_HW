import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public account: Account;
  registerForm = new FormGroup({
    name: new FormControl(),
    fullName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    userName: new FormControl()
  });
  constructor() {
    
   }

  ngOnInit(): void {
  }

  register(registerForm) {
    console.log(registerForm);
  }

}
