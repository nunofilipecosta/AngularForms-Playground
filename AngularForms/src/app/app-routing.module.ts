import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommunicationPageComponent } from './communication-page/communication-page.component';
import { DeclarativePageComponent } from './declarative-page/declarative-page.component';

const routes: Routes = [
  { path: '', component : HomePageComponent },
  { path: 'declarative', component : DeclarativePageComponent},
  { path: 'reactive', component : ReactivePageComponent},
  { path: 'communication', component: CommunicationPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}






