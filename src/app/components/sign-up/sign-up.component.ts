import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgModel } from '@angular/forms';
import { AccountServiceService } from 'src/app/account-service.service';

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
    username: new FormControl(),
    password: new FormControl(),
    password_confirm: new FormControl()
    
  });

  constructor(private accountService: AccountServiceService) {
    
   }

  ngOnInit(): void {
  }

  register(registerForm) {
    console.log(registerForm);
  }


}
