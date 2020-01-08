import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyAuthService {
  isLoggedIn: boolean = false;

  constructor() { }

  login() {
    this.isLoggedIn = true;
    alert('Dummy Sign in Successful');
  }

  logout() {
    this.isLoggedIn = false;
    alert('Dummy Sign out Successful');
  }
}
