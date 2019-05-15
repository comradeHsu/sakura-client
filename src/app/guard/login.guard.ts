import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {PersonalService} from '../service/personal.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router,
              private service: PersonalService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    const token = sessionStorage.getItem('token');
    if (token !== null) {
      return true;
    } else {
      this.service.loginExpired.next(true);
      return false;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
