import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConversationInProgressComponent } from './page-conversation-in-progress.component';

describe('PageConversationInProgressComponent', () => {
  let component: PageConversationInProgressComponent;
  let fixture: ComponentFixture<PageConversationInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConversationInProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConversationInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
