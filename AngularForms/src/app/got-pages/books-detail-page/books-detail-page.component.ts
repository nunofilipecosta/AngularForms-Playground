import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BookResolved } from 'src/app/Models/book';

@Component({
  selector: 'nc-books-detail-page',
  templateUrl: './books-detail-page.component.html',
  styleUrls: ['./books-detail-page.component.css']
})
export class BooksDetailPageComponent implements OnInit {
  book: Book;
  errorMessage: string;
  pageTitle: string;

  constructor(private readonly activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.data.subscribe(resolvedData => {
      const resolvedBook: BookResolved = resolvedData['resolvedBook'];
      this.errorMessage = resolvedBook.error;
      this.onBookRetrieved(resolvedBook.book);
    });
  }
  onBookRetrieved(book: Book): any {
    this.book = book;

    if (this.book) {
      this.pageTitle = `Book detail ${book.name}`;
    }
  }
}
