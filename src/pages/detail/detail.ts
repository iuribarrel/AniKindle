import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  manga
  mangaDetail
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.manga= this.httpClient.get(`https://api.jikan.moe/manga/${this.navParams.get('id')}`);
    this.manga.subscribe(data => {
      console.log('my data: ', data);
     this.mangaDetail = data;
    })
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('id'));
  }

}
