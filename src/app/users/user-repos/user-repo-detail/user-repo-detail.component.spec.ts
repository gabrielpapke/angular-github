import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepoDetailComponent } from './user-repo-detail.component';

describe('UserRepoDetailComponent', () => {
  let component: UserRepoDetailComponent;
  let fixture: ComponentFixture<UserRepoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
