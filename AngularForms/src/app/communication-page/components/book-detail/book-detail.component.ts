import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharaterStore } from '../../services/characters-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nc-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  currentBooks: string[] | null;
  currentCharacterSub: Subscription;

  constructor(private readonly characterStore: CharaterStore) {}

  ngOnInit() {
    this.currentCharacterSub = this.characterStore.selectedCharacterChanges$.subscribe(character => {
      if (character) {
        this.currentBooks = character.books;
      } else {
        this.currentBooks = [];
      }
    });
  }

  ngOnDestroy(): void {
    this.currentCharacterSub.unsubscribe();
  }
}
