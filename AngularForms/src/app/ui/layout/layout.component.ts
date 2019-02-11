import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../app.animations';

@Component({
  selector: 'nc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations : [slideInAnimation]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
