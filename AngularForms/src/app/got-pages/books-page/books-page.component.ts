import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { ActivatedRoute } from '@angular/router';
import { GotStore } from '../services/got-store.service';

@Component({
  selector: 'nc-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  books: Book[];
  firstPage = 1;
  currentPage: number;
  pageSize: number;
  previousPage = null;
  nextPage = 2;
  lastPage = null;
  constructor(private readonly gotStore: GotStore, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe( (params) => {
      this.currentPage = +params.get('page') || 1;
      this.pageSize = +params.get('pageSize') || 10;
      this.getBooks(this.currentPage, this.pageSize);
    });
  }

  getBooks(page: number, pageSize: number): void {
    this.gotStore.getBooks(this.currentPage, pageSize).subscribe(books => {
      this.books = books;
    });
  }


  getId(book: Book): string {
    return book.url.substr(book.url.lastIndexOf('/') + 1);
  }

}
