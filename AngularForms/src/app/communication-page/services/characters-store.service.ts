import { Injectable } from '@angular/core';
import { Character } from 'src/app/Models/character';
import { Observable, of, throwError, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class CharaterStore {
  private charactersUrl = 'https://www.anapioficeandfire.com/api/characters';
  private characters: Character[];
  public currentCharacter: Character | null;
  private selectedCharacterSource = new Subject<Character | null>();
  private currentCharacterSource = new BehaviorSubject<Character | null>(null);
  // to keep the Subject private
  selectedCharacterChanges$ = this.selectedCharacterSource.asObservable();
  currentCharacterChanges$ = this.currentCharacterSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    if (this.characters) {
      return of(this.characters);
    }

    return this.httpClient
      .get<Character[]>(this.charactersUrl)
      .pipe(tap(data => this.characters = data))
      .pipe(catchError( err => this.handleError(err)));
  }

  getCharacter(url: string): Observable<Character > {
    if (this.characters.find( i => i.url === url)) {
      return of(this.characters.find( i => i.url === url));
    }

    return this.httpClient
      .get<Character>(url)
      .pipe(catchError( err => this.handleError(err)));
  }

  changeSelectedCharacter(character: Character | null): void {
    this.selectedCharacterSource.next(character);
  }

  changeCurrentCharacter(character: Character | null): void {
    this.currentCharacterSource.next(character);
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
