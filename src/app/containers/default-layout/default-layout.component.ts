import {Component} from '@angular/core';

import { navItems } from '../../_nav';
import { DummyAuthService } from '../../services/dummy-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
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
}
