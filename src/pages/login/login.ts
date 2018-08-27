import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  fnc_login(){
    if(this.usuario_digitado == this.usuario && this.senha_digitada == this.senha){
      this.navCtrl.setRoot
      (HomePage, {name:this.usuario});
    }else if(this.usuario_digitado == null && this.senha_digitada == null){
      this.presentToast2();
    }
    else{
      this.presentToast();
    }
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
