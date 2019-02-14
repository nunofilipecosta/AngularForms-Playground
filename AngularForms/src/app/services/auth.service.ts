import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl = '';

  constructor() {}

  get isLoggedIn(): boolean {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1) % 2 === 0;
  }
}
