import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login/login.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { TopnavbarComponent } from '../components/topnavbar/topnavbar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UsersComponent } from '../components/users/users.component';
import { UserformComponent } from '../components/userform/userform.component';
import { MyprofileComponent } from '../components/myprofile/myprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    SidenavComponent,
    TopnavbarComponent,
    DashboardComponent,
    UsersComponent,
    UserformComponent,
    MyprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
