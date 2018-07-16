import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UsersComponent } from '../components/users/users.component';
import { UserformComponent } from '../components/userform/userform.component';
import { MyprofileComponent } from '../components/myprofile/myprofile.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: 'dashboard', component: DashboardComponent, outlet: 'content' },
      { path: 'users', component: UsersComponent, outlet: 'content' },
      { path: 'userform', component: UserformComponent, outlet: 'content' },
      { path: 'myprofile', component: MyprofileComponent, outlet: 'content' }





    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {

}
