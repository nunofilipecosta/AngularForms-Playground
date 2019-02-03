import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharaterStore } from '../../services/characters-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nc-allegiance-detail',
  templateUrl: './allegiance-detail.component.html',
  styleUrls: ['./allegiance-detail.component.css']
})
export class AllegianceDetailComponent implements OnInit, OnDestroy {
  currentAllegiances: string[];
  currentCharacterSub: Subscription;

  constructor(private readonly characterStore: CharaterStore) {}

  ngOnInit() {
    this.currentCharacterSub = this.characterStore.currentCharacterChanges$.subscribe(character => {
      if (character) {
        console.log(JSON.stringify(character.allegiances));
        this.currentAllegiances = character.allegiances;
      } else {
        this.currentAllegiances = [];
      }
    });
  }

  ngOnDestroy(): void {
    this.currentCharacterSub.unsubscribe();
  }
}
