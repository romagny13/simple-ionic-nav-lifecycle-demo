import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page-one',
  templateUrl: 'page-one.html'
})
export class PageOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  onGoBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop();
    }
  }

  onGoToHome() {
    this.navCtrl.popToRoot();
  }
}
