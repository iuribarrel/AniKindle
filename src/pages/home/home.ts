import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nome = this.navParams.get('name');
  mangas;
  mangas2;
  mangasList; 
  mangasListCompleted;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuCtrl: MenuController, 
              public httpClient: HttpClient,
              public login: LoginProvider) {
    menuCtrl.enable(true);
    this.getData();
  }
  getData(){
    this.mangas= this.httpClient.get('https://api.jikan.moe/search/manga/status=airing');
    this.mangas.subscribe(data => {
      console.log('aa', data.result);
      this.mangasList = data.result;
    })

    this.mangas2= this.httpClient.get('https://api.jikan.moe/search/manga/status=completed');
    this.mangas2.subscribe(data => {
      console.log('my data: ', data.result);
      this.mangasListCompleted = data.result;
    })
  }
  openMenu() {
    this.menuCtrl.open();
  }
  fnc_descricao(id_manga: any){
    this.navCtrl.push(DetailPage, {id:id_manga});
  }
  sair(){
    

    this.login.logout().then((data) => {
      this.navCtrl.setRoot
      (LoginPage);
    })
  }
}
