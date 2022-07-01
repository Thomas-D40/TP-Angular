import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRelatedPostListComponent } from './page-related-post-list.component';

describe('PageRelatedPostListComponent', () => {
  let component: PageRelatedPostListComponent;
  let fixture: ComponentFixture<PageRelatedPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRelatedPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRelatedPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
