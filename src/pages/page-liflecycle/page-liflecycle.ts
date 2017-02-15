import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page-liflecycle',
  templateUrl: 'page-liflecycle.html'
})
export class PageLiflecyclePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log('ionViewCanEnter');
    // navigation enter guard
    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewCanLeave(): boolean | Promise<boolean> {
    console.log('ionViewCanLeave');
    // navigation leave guard
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(true);
      }, 2000);
    });
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }
}
