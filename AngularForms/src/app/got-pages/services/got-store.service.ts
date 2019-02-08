import { Injectable } from '@angular/core';
import { Character } from 'src/app/Models/character';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Book } from 'src/app/Models/book';
import { House } from 'src/app/Models/house';

@Injectable()
export class GotStore {
  private charactersUrl = 'https://www.anapioficeandfire.com/api/characters/';
  private booksUrl = 'https://www.anapioficeandfire.com/api/books/';
  private housesUrl = 'https://www.anapioficeandfire.com/api/houses';

  constructor(private httpClient: HttpClient) {}

  getCharacters(page: number, pageSize: number): Observable<Character[]> {
    return this.httpClient
      .get<Character[]>(this.charactersUrl + '?page=' + page + '&pageSize=' + pageSize)
      .pipe(catchError( err => this.handleError(err)));
  }

  getCharactersById(id: number): Observable<Character> {
    return this.httpClient
      .get<Character>(this.charactersUrl + id)
      .pipe(catchError( err => this.handleError(err)));
  }

  getBooks(page: number, pageSize: number): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>(this.booksUrl + '?page=' + page + '&pageSize=' + pageSize)
      .pipe(catchError( err => this.handleError(err)));
  }

  getBooksById(id: number): Observable<Book> {
    return this.httpClient
      .get<Book>(this.booksUrl + id)
      .pipe(catchError( err => this.handleError(err)));
  }

  getHouses(): Observable<House[]> {
    return this.httpClient
      .get<House[]>(this.housesUrl)
      .pipe(catchError( err => this.handleError(err)));
  }


  private handleError(handleError: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (handleError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${handleError.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${handleError.status}: ${
        handleError.body.error
      }`;
    }
    console.error(handleError);
    return throwError(errorMessage);
  }
}
