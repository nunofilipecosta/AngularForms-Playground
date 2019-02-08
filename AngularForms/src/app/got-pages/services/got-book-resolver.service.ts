import { Injectable } from '@angular/core';
import { BookResolved } from 'src/app/Models/book';
import { RouterStateSnapshot, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GotStore } from './got-store.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookResolver implements Resolve<BookResolved> {
  constructor(private readonly gotStore: GotStore) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BookResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({ book: null, error: message });
    }

    return this.gotStore.getBooksById(+id).pipe(
      map(book => ({ book: book })),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({ book: null, error: message });
      })
    );
  }
}
