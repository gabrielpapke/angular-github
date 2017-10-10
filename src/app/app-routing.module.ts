import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { RepoDetailComponent } from './repos/repo-detail/repo-detail.component';

const ROUTES = RouterModule.forRoot([
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'users/:username',
      component: UsersComponent
    },
    {
      path: 'repos/:username',
      component: ReposComponent
    },
    {
        path: 'repos/detail/:repo',
        component: RepoDetailComponent
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    //otherwise
    { 
      path: '**',
      redirectTo: '/home'
    }
  ])

@NgModule({
    imports: [ROUTES],
    exports: [RouterModule]
})

export class AppRoutingModule {

}