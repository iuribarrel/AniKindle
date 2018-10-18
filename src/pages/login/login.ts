import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { LoginProvider } from '../../providers/login/login';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario = "iuri";
  senha   = "1234";
  usuario_digitado :String;
  senha_digitada   :String; 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController, 
              public toastCtrl: ToastController,
              public login: LoginProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  fnc_login(){
    this.login.login().then((data) => {
      this.navCtrl.setRoot
      (HomePage, {name:this.usuario});
    }).catch((error) => {
      this.presentToast2();
    })
    
  }
  fnc_login_fb(){
    this.login.loginFacebook().then((data) => {
      this.navCtrl.setRoot
      (HomePage, {name:this.usuario});
    }).catch((error) => {
      this.presentToast();
    })
    
  }

  logar_emai(){
    this.login.loginEmail(this.usuario_digitado, this.senha_digitada).then((data) => {
      this.navCtrl.setRoot
      (HomePage, {name:this.usuario});
    }).catch((error) => {
      this.presentToast();
    })
  }

  fnc_registro(){
    this.navCtrl.push(RegistroPage);
  } 
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Acesso Negado!',
      subTitle: 'Usuario ou senha incorreto',
      buttons: ['OK']
    });
    alert.present();
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Usuario ou senha incorreto',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  presentToast2() {
    const toast = this.toastCtrl.create({
      message: 'Digite um usuario',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

}
