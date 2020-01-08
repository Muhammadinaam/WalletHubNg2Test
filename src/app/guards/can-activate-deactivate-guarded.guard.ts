import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardedComponent } from '../views/main/guarded/guarded.component';
import { DummyAuthService } from '../services/dummy-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateDeactivateGuardedGuard implements CanActivate, CanDeactivate<GuardedComponent> {
  
  constructor(
    private auth: DummyAuthService,
    private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if( ! this.auth.isLoggedIn ) {
      this.router.navigate(['no-permission']);
      return false;
    }

    return true;
  }

  canDeactivate(
    component: GuardedComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm('[CanDeactivate Guard] Are you sure you want to leave Guarded Page');
  }
  
}
