import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { HousesPageComponent } from './houses-page/houses-page.component';
import { GotStore } from './services/got-store.service';
import { CharacterDetailPageComponent } from './characters-detail-page/characters-detail-page.component';
import { BooksDetailPageComponent } from './books-detail-page/books-detail-page.component';
import { BookResolver } from './services/got-book-resolver.service';

const routes: Routes = [
  { path: 'got', component: LandingPageComponent },
  { path: 'got/characters', component: CharactersPageComponent },
  { path: 'got/characters/:id', component: CharacterDetailPageComponent, data: { pageTitle: 'Characters List' } },
  { path: 'got/books', component: BooksPageComponent },
  { path: 'got/books/:id', component: BooksDetailPageComponent, resolve: { resolvedBook : BookResolver } },
  { path: 'got/houses', component: HousesPageComponent },
  { path: 'got/houses/:id', component: HousesPageComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  // tslint:disable-next-line:max-line-length
  declarations: [LandingPageComponent, CharactersPageComponent, BooksPageComponent, HousesPageComponent, CharacterDetailPageComponent, BooksDetailPageComponent],
  providers: [GotStore]
})
export class GotPagesModule {}
