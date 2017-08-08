import {Routes} from '@angular/router';
import {AppComponent} from '../components/app/app.component';
import {ScoreComponent} from '../components/score/score.component';
import {WelcomePageComponent} from '../components/welcome-page/welcome-page.component';

export const APP_ROUTES: Routes = [
  {path: 'home', component: WelcomePageComponent},
  {path: 'scores', component: ScoreComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
]
