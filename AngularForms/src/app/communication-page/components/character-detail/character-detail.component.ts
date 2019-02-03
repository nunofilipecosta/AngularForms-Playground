import { Component, OnInit } from '@angular/core';
import { CharaterStore } from '../../services/characters-store.service';
import { Character } from 'src/app/Models/character';

@Component({
  selector: 'nc-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  get character(): Character | null {
    return this.characterStore.currentCharacter;
  }

  constructor(private readonly characterStore: CharaterStore) {}

  ngOnInit() {}
}
