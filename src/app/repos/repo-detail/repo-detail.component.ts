import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  public goBack() {
    this.location.back();
  }
}
