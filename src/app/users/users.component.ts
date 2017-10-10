import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { User } from './shared/users.model';
import { UsersService } from "./shared/users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public user: User;

    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute,
    ) { }
    
    ngOnInit() {
        this.user = new User();

        this.route.params
        .switchMap((params: Params) => this.usersService.getByUsername(params['username']) )
        .subscribe(
            user => this.user = user,
            error => alert('Ocorreu um erro, tente novamente mais tarde')
        );
    }
    
}
