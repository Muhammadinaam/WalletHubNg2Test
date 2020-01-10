import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyAuthService {
  private _isLoggedIn: boolean = false;

  constructor() { }

  login() {
    this._isLoggedIn = true;
    alert('Dummy Sign in Successful');
  }

  logout() {
    this._isLoggedIn = false;
    alert('Dummy Sign out Successful');
  }

  public isLoggedIn() {
    return this._isLoggedIn;
  }
}
