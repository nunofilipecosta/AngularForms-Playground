import { Component, OnInit } from '@angular/core';
import { GotStore } from '../services/got-store.service';
import { Character } from 'src/app/Models/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nc-characters-detail-page',
  templateUrl: './characters-detail-page.component.html',
  styleUrls: ['./characters-detail-page.component.css']
})
export class CharacterDetailPageComponent implements OnInit {
  character: Character;

  constructor(private readonly gotStore: GotStore, private readonly activeRoute: ActivatedRoute) {
  }

  ngOnInit() {

    const currentId = +this.activeRoute.snapshot.paramMap.get('id');
    this.gotStore.getCharactersById(currentId).subscribe(character => {
      this.character = character;
    });

    console.log(this.activeRoute.snapshot.data['pageTitle']);

    // this.activeRoute.paramMap.subscribe(params => {
    //   const id = Number(params.get('id'));
    //   this.gotStore.getCharactersById(id).subscribe(character => {
    //     this.character = character;
    //   });
    // });
  }
}
