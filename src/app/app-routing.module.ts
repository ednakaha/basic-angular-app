import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { AutoGuard } from './guards/auto.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'member',component:MemberComponent,canActivate:[AutoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
