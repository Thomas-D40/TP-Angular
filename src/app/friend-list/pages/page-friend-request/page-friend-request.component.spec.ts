import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFriendRequestComponent } from './page-friend-request.component';

describe('PageFriendRequestComponent', () => {
  let component: PageFriendRequestComponent;
  let fixture: ComponentFixture<PageFriendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFriendRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFriendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
