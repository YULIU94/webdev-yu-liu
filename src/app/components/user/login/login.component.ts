import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {isUndefined} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg: string;
  // userService: UserService;
  // router: Router;

  constructor(private userService: UserService,
              private router: Router) { }

  // function: login
  login(username: String, password: String) {
    console.log('login' + username);
    console.log(password);
    if (username.length === 0 || password.length === 0) {
      alert('missed username or password');
    } else {
      const user: User = this.userService.findUserByCredentials(username, password);
      if (user) {
        this.router.navigate(['profile', user._id]);
      } else {
        this.errorFlag = true;
        this.errorMsg = 'Error';
        alert('wrong username or password');
      }
    }
  }
  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = '';
  }
}
