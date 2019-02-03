import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class CommunicationPageService implements OnDestroy{
  someValue: boolean;
  filterBy = '';

  constructor() {
    console.log('Service created');
  }

  ngOnDestroy(): void {
    console.log('Service destroyed');
  }
}
