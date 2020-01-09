import {Component} from '@angular/core';

import { navItems } from '../../_nav';
import { DummyAuthService } from '../../services/dummy-auth.service';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  animations: [
    
    
    trigger('routeAnimations', [
      transition('* => ngAnimationPage', [
        
        style({ position: 'relative' }),
        
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),

        query(':enter', [style({ left: '-100%', opacity: 0 })]),
        query(':leave', animateChild(), {optional: true}),

        group([
          query(':leave', [animate('500ms ease-in', style({ left: '100%', opacity: 0 }))], {optional: true}),
          query(':enter', [animate('500ms ease-in', style({ left: '0%', opacity: 1 }))], {optional: true})
        ]),
        query(':enter', animateChild())

      ])
    ])


  ]
})
export class DefaultLayoutComponent {
  minimized = false;
  public navItems = [...navItems];
  isLoggedIn = false;

  constructor(private auth: DummyAuthService) {
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  toggleMinimize(e) {
    this.minimized = e;
  }

  loginLogoutButtonClicked() {
    if(this.auth.isLoggedIn) {
      this.auth.logout();
    } else {
      this.auth.login();
    }
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
