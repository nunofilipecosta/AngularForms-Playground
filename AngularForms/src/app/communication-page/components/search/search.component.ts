import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input()
  isVisible: boolean;

  @Input()
  hitCount: number;

  @Output()
  searchFilterChange: EventEmitter<string> = new EventEmitter<string>();

  hitMessage: string;

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.searchFilterChange.emit(value);
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const currentId = this.route.snapshot.paramMap.get('id');
    const name = this.route.snapshot.queryParamMap.get('name');
    const code = this.route.snapshot.queryParamMap.get('code');

    if (currentId !== null) {
      console.log(currentId);
      this._listFilter = currentId;
    }

    if (name !== null) {
      console.log(name + ':' + code);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);

    if (changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = 'No matches found';
    } else {
      this.hitMessage = 'Hits : ' + this.hitCount;
    }
  }
}
