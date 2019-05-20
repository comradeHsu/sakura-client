import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RouteAnimation} from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    RouteAnimation
  ]
})
export class AppComponent {
  title = 'sakura';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
