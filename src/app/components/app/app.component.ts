import { Component } from '@angular/core';
import {Headline, HEADLINES} from '../../domain/HeadLine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  headLines: Headline [] = HEADLINES;
}
