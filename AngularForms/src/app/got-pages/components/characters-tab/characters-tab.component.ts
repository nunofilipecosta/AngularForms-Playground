import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nc-characters-tab',
  templateUrl: './characters-tab.component.html',
  styleUrls: ['./characters-tab.component.css']
})
export class CharactersTabComponent implements OnInit {
  characters: any;

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent.data.subscribe(data => {
      // reset any form if needed
      // this.form.reset();
      this.characters = data['resolvedBook'].book.characters;
    });
  }

}
