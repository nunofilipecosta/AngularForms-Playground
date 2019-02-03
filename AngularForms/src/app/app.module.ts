import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommunicationPageComponent } from './communication-page/communication-page.component';
import { DeclarativePageComponent } from './declarative-page/declarative-page.component';
import { SearchComponent } from './communication-page/components/search/search.component';
import { CommunicationPageService } from './communication-page/services/communication-page.service';
import { CharaterStore } from './communication-page/services/characters-store.service';
import { CharacterDetailComponent } from './communication-page/components/character-detail/character-detail.component';
import { BookDetailComponent } from './communication-page/components/book-detail/book-detail.component';
import { AllegianceDetailComponent } from './communication-page/components/allegiance-detail/allegiance-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ReactivePageComponent,
    HomePageComponent,
    CommunicationPageComponent,
    DeclarativePageComponent,
    SearchComponent,
    CharacterDetailComponent,
    BookDetailComponent,
    AllegianceDetailComponent,
    ],
  imports: [BrowserModule, AppRoutingModule,  FormsModule, ReactiveFormsModule, HttpClientModule, UiModule],
  providers: [CommunicationPageService, CharaterStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
