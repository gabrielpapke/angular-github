import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';
import { RepoDetailComponent } from './repos/repo-detail/repo-detail.component';

import { AppRoutingModule } from "./app-routing.module";

import { UsersService } from "./users/shared/users.service";
import { ReposService } from "./repos/shared/repo.service";

// rxjs operator
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/switchMap";

// rxjs extensions
import "rxjs/add/Observable/of";
import 'rxjs/add/Observable/throw';

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    UsersComponent,
    NavComponent,
    HomeComponent,
    RepoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UsersService,
    ReposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
