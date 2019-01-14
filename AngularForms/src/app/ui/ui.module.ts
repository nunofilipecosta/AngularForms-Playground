import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, RouterModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule {}
