import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFriendListComponent } from './page-friend-list.component';

describe('PageFriendListComponent', () => {
  let component: PageFriendListComponent;
  let fixture: ComponentFixture<PageFriendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFriendListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFriendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
