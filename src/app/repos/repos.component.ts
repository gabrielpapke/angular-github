import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { Repo } from './shared/repo.model';
import { ReposService } from "./shared/repo.service";
import { UsersService } from "../users/shared/users.service";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})

export class ReposComponent implements OnInit {
  public repos: Array<Repo>;

  constructor(
      private reposService: ReposService,
      private usersService: UsersService,
      private route: ActivatedRoute,
  ) { }
  
  ngOnInit() {

      this.route.params
      .switchMap((params: Params) => this.usersService.getPopularRepos(params['username']) )
      .subscribe(
          repos => this.repos = repos,
          error => alert('Ocorreu um erro, tente novamente mais tarde')
      );
  }
  
}