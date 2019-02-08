import { Component, OnInit } from '@angular/core';
import { GotStore } from '../services/got-store.service';
import { Character } from 'src/app/Models/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nc-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit {
  characters: Character[];
  firstPage = 1;
  currentPage: number;
  pageSize: number;
  previousPage = null;
  nextPage = 2;
  lastPage = null;

  constructor(private readonly gotStore: GotStore, private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe( (params) => {
      this.currentPage = +params.get('page') || 1;
      this.pageSize = +params.get('pageSize') || 10;
      this.getCharacters(this.currentPage, this.pageSize);
    });
  }

  getCharacters(page: number, pageSize: number): void {
    this.gotStore.getCharacters(this.currentPage, pageSize).subscribe(characters => {
      this.characters = characters;
    });
  }

  getId(character: Character): string {
    return character.url.substr(character.url.lastIndexOf('/') + 1);
  }
}
