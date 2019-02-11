import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/Models/book';

@Component({
  selector: 'nc-authors-tab',
  templateUrl: './authors-tab.component.html',
  styleUrls: ['./authors-tab.component.css']
})
export class AuthorsTabComponent implements OnInit {
  authors: string[];
  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent.data.subscribe(data => {
      this.authors = data['resolvedBook'].book.authors;
    });
  }

}
