import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostListComponent } from './page-post-list.component';

describe('PagePostListComponent', () => {
  let component: PagePostListComponent;
  let fixture: ComponentFixture<PagePostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
