import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSuggestionListComponent } from './page-suggestion-list.component';

describe('PageSuggestionListComponent', () => {
  let component: PageSuggestionListComponent;
  let fixture: ComponentFixture<PageSuggestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSuggestionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSuggestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
