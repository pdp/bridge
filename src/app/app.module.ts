import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {BannerComponent} from './components/banner/banner.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HeadLineComponent} from './components/headline/headline.component';
import {RouterModule} from '@angular/router';
import {ScoreComponent} from './components/score/score.component';
import {APP_ROUTES} from './common/Routes';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    NavigationComponent,
    HeadLineComponent,
    ScoreComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
        APP_ROUTES
      )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
