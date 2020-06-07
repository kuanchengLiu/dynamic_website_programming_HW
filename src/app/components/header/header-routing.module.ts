import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from '../features/community-introduction/introduction/introduction.component';
import { LoginComponent } from '../features/login/login.component';


const routes: Routes = [
  {
    path: 'intrduction', component: IntroductionComponent, children: [
      { path: 'features/login', component: LoginComponent },

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
