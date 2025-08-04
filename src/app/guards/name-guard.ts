import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NameGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const name = sessionStorage.getItem('username');
    if (name && name.trim().length > 0) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
