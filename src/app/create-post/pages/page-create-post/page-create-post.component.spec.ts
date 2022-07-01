import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatePostComponent } from './page-create-post.component';

describe('PageCreatePostComponent', () => {
  let component: PageCreatePostComponent;
  let fixture: ComponentFixture<PageCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
