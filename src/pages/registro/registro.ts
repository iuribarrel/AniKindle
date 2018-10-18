import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  email;
  senha;
  constructor(public navCtrl: NavController, public navParams: NavParams, public login: LoginProvider) {
    this.email = '';
    this.senha = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  registrar(){
    this.login.registroEmail(this.email, this.senha).then((data) => {
      this.navCtrl.setRoot
      (LoginPage);
    })
  }

}
