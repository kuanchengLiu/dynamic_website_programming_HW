import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/features/login/login.component';
import { IntroductionComponent } from './components/features/community-introduction/introduction/introduction.component';
import { EscapeRoutesComponent } from './components/features/community-introduction/escape-routes/escape-routes.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'intrduction', component: IntroductionComponent },
  { path: 'escapeRoute', component: EscapeRoutesComponent },
  { path: '', redirectTo: '/intrduction', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
