import { Component, ViewChild } from '@angular/core';
import { IMoc, INestedUsernameEmail, IuserInfo } from './models/userForm.interface';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stdFormMachineTest';
  @ViewChild('signUpForm') signUpForm !: NgForm

  

  contactModeArr:Array<IMoc> =[
    {
      moc : 'email',
      id : 1
    },
    {
      moc : 'mobile',
      id : 2
    }
    
  ];

  userInfo : INestedUsernameEmail  = {
    
    
      "usernameEmail": {
          "username": "jhonDoe",
          "email": "jhondoe@gmail.com"
      },
      "password": "Pass@234",
      "secretQuestion": "petName",
      "ans": "joy",
      "isSubscribed": "",
      "userGender": "male",
      "modeOfContacrt": "mobile"
  
  
  }
  
  userInfo1 !:INestedUsernameEmail

  onSignUp(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm);
    console.log(this.signUpForm.value);
    }
  }

  onEditUser(){
    this.signUpForm.form.patchValue(this.userInfo)
  }
}
