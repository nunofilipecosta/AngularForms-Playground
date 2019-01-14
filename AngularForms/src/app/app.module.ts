import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommunicationPageComponent } from './communication-page/communication-page.component';
import { DeclarativePageComponent } from './declarative-page/declarative-page.component';


@NgModule({
  declarations: [AppComponent, ReactivePageComponent, HomePageComponent, CommunicationPageComponent, DeclarativePageComponent],
  imports: [BrowserModule, AppRoutingModule,  FormsModule, ReactiveFormsModule, HttpModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
