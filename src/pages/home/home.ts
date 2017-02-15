import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PageOnePage } from '../page-one/page-one';
import { PageTwoPage } from '../page-two/page-two';
import { PageLiflecyclePage } from '../page-liflecycle/page-liflecycle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // with directive [navPush] on button
  pageTwo = PageTwoPage;

  constructor(public navCtrl: NavController) { }

  onGoToPageOne() {
     this.navCtrl.push(PageOnePage);
    // with page transition
    /* this.navCtrl.push(PageOnePage, {}, {
       direction: 'back',
       duration: 1000,
       easing: 'ease-out'
     });*/
  }

  onGoToPageTwo() {
    // this.navCtrl.push(PageTwoPage, 'My parameter');
    // or object
    this.navCtrl.push(PageTwoPage, { myParam: 'My parameter value' });
  }

  onGoToPageThree() {
    this.navCtrl.push(PageLiflecyclePage);
  }
}
