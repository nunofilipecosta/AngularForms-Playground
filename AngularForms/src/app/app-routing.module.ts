import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommunicationPageComponent } from './communication-page/communication-page.component';
import { DeclarativePageComponent } from './declarative-page/declarative-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'declarative', component: DeclarativePageComponent },
  { path: 'reactive', component: ReactivePageComponent },
  { path: 'communication', component: CommunicationPageComponent },
  { path: 'communication/:id', component: CommunicationPageComponent },
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
