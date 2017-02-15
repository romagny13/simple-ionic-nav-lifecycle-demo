import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PageOnePage } from '../pages/page-one/page-one';
import { PageTwoPage } from '../pages/page-two/page-two';
import { PageLiflecyclePage } from '../pages/page-liflecycle/page-liflecycle';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PageOnePage,
    PageTwoPage,
    PageLiflecyclePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PageOnePage,
    PageTwoPage,
    PageLiflecyclePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
