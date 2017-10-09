import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserReposComponent } from './users/user-repos/user-repos.component';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { UserRepoDetailComponent } from './users/user-repos/user-repo-detail/user-repo-detail.component';

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    UserReposComponent,
    UsersComponent,
    NavComponent,
    HomeComponent,
    UserRepoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
