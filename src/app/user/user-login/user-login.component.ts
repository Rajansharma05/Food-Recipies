import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userLoginService: UserLoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(
      {
        'id': [null],
        "email": [],
        "name": [],
        "password": [],
        "phone": [],
      }
    );
  }
user:any;
  onclk() {
    this.router.navigate(['/userreg']);
  }
message=''
  onUserLogIn() {
    this.userLoginService.checkUserLoginDetails(this.userForm.value).
  subscribe((data:any)=>{ this.user=data;
      const id=this.user.id;
      console.log(id)

      this.router.navigate(['/userdash',id]);
        
      },
      (error) => {
        this.message = 'Invalid Credentials'
        console.error('Login failed', error);

      }
    );
    }

}
