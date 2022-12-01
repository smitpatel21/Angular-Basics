import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedin: boolean = false;
  constructor() { }
  
  login() {
    return this.isLoggedin = !this.isLoggedin;
  }
}
