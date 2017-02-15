import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page-two',
  templateUrl: 'page-two.html'
})
export class PageTwoPage implements OnInit {
  param: string;
  constructor(public navParams: NavParams) { }

  ngOnInit() {
    // this.param = this.navParams.data;
    // with object
    this.param = this.navParams.get('myParam');
  }
}
