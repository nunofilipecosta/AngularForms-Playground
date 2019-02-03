import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { CommunicationPageService } from './services/communication-page.service';
import { SearchComponent } from './components/search/search.component';
import { Character } from '../Models/character';
import { CharaterStore } from './services/characters-store.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nc-communication-page',
  templateUrl: './communication-page.component.html',
  styleUrls: ['./communication-page.component.css']
  // providers: [CommunicationPageService]
})
export class CommunicationPageComponent implements OnInit, AfterViewInit, OnDestroy {
  data: Character[];
  filteredData: Character[];
  message: 'Testing message';
  isSearchVisible = true;
  selectedCharacter: Character | null;

  selectedCharacterSub: Subscription;

  @ViewChild(SearchComponent)
  searchComponent: SearchComponent;

  get someValue(): boolean {
    return this.communicationService.someValue;
  }
  set someValue(value: boolean) {
    this.communicationService.someValue = value;
  }

  constructor(private characterStore: CharaterStore, private communicationService: CommunicationPageService) {
    console.log('constructor CommunicationPageComponent');
  }

  ngOnInit() {
    console.log('ngOnInit');

    this.characterStore.getCharacters().subscribe(characters => {
      this.data = characters;
      this.searchComponent.listFilter = this.communicationService.filterBy;
    });

    this.selectedCharacterSub = this.characterStore.currentCharacterChanges$.subscribe(character => {
      this.selectedCharacter = character;
    });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    this.selectedCharacterSub.unsubscribe();
  }

  private filterData(filterValue: string): any {
    if (this.data) {
      return this.data.filter(item => item.aliases.findIndex(a => a.startsWith(filterValue)) !== -1);
    }
  }

  onHideSearch() {
    console.log('onHideSearch');
    this.isSearchVisible = !this.isSearchVisible;
  }

  onSearchFilterChange(value: string): void {
    console.log('onSearchFilterChange');
    this.communicationService.filterBy = value;
    this.filteredData = this.filterData(value);
  }

  onSelectCharacter(character: Character) {
    console.log('onSelectCharacter');
    let clearCharacter = false;

    // simple change detection though binding
    if (this.characterStore.currentCharacter && character.url === this.characterStore.currentCharacter.url) {
      this.characterStore.currentCharacter = null;
      clearCharacter = true;
    } else {
      this.characterStore.currentCharacter = character;
    }

    // service notifications
    if (clearCharacter) {
      this.characterStore.changeSelectedCharacter(null);
    } else {
      this.characterStore.changeSelectedCharacter(character);
    }

    // service notifications BehaviorSubject
    if (clearCharacter) {
      this.characterStore.changeCurrentCharacter(null);
    } else {
      this.characterStore.changeCurrentCharacter(character);
    }
  }

  onNavigateToRoute(): void {
    // this.router.snapshot.paramMap.get('id');
    // this.router.navigate(['/communication', 5]);

    // this.router.navigate(['/communication'], {queryParams: {name : 'Arya', code : 1 }});
    // this.route.snapshot.queryParamMap.get('name');
  }
}
