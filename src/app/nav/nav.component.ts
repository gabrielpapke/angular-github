import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { User } from "../users/shared/users.model";
import { UsersService } from "../users/shared/users.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public user = new User();
  constructor(
    // private usersService: UsersService,
    private router : Router
  ) { }

  ngOnInit() {
  }
  public searchUser(username: string) {
    this.router.navigate(['/users/', username])
  }
}
