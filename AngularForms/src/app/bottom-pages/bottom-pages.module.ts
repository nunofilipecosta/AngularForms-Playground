import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MessagesPageComponent } from './messages-page/messages-page.component';

const routes: Routes = [
  { path: '', component: LangingPageComponent, outlet: 'bottom' },
  { path: 'messages', component: MessagesPageComponent, outlet: 'bottom' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LangingPageComponent, MessagesPageComponent]
})
export class BottomPagesModule {}
