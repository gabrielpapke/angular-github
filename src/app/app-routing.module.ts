import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from './users/users.component';
import { UserReposComponent } from './users/user-repos/user-repos.component';
import { UserRepoDetailComponent } from './users/user-repos/user-repo-detail/user-repo-detail.component';

const ROUTES = RouterModule.forRoot([
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'users/:id/repos',
      component: UserReposComponent
    },
    {
        path: 'repos/:repo',
        component: UserRepoDetailComponent
      },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ])

@NgModule({
    imports: [ROUTES],
    exports: [RouterModule]
})

export class AppRoutingModule {

}