import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListConversationComponent } from './page-list-conversation.component';

describe('PageListConversationComponent', () => {
  let component: PageListConversationComponent;
  let fixture: ComponentFixture<PageListConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListConversationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
