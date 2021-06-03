import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommunicationPageComponent } from './communication-page/communication-page.component';
import { DeclarativePageComponent } from './declarative-page/declarative-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RxJsComponent } from './modules/rxjs/rxjs-page/rxjs-page.component';
import { RxJsModule } from './modules/rxjs/rxjs.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'declarative', component: DeclarativePageComponent },
  { path: 'reactive', component: ReactivePageComponent },
  { path: 'communication', component: CommunicationPageComponent },
  { path: 'communication/:id', component: CommunicationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'rxjs', component: RxJsComponent },
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule, RxJsModule]
})
export class AppRoutingModule {}
