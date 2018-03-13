import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   @ViewChild('username')uname;
   @ViewChild('password')password;
   
  constructor(public navCtrl: NavController) {

  }
signIn(){
  this.navCtrl.push(LoginPage);
}
register(){
  this.navCtrl.push(RegisterPage);
  
}
}
