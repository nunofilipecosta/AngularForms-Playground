import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [AppComponent, AboutPageComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule,  FormsModule, ReactiveFormsModule, HttpModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
