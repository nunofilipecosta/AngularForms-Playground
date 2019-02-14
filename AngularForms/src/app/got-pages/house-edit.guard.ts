import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { HousesPageComponent } from './houses-page/houses-page.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HouseEditGuard implements CanDeactivate<HousesPageComponent> {
  constructor() {
    console.log('CanDeactivate<HousesPageComponent>');
  }

  canDeactivate(
    component: HousesPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (component.isDirty) {
      return confirm('Exit without saving changes?');
    }

    return true;
  }
}
