import { Component } from '@angular/core';
import { Employee } from './Models/employee.model';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'nc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';

  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Darla', 'Smith', true, '1099', 'Spanish');

  loading = true;
  constructor(private readonly router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if ( routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError ) {
      this.loading = false;
    }
  }

  lastNameToUpper(value: string) {
    if (value.length > 0) {
      this.model.lastName = value.toUpperCase();
    } else {
      this.model.lastName = value;
    }
  }
}
