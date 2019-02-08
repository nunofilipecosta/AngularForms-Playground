export class Book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publiser: string;
  country: string;
  mediaType: string;
  released: Date;
  characters: string[];
  povCharacters: string[];
}

export interface BookResolved {
  book: Book;
  error?: any;
}
