import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfilDetailComponent } from './page-profil-detail.component';

describe('PageProfilDetailComponent', () => {
  let component: PageProfilDetailComponent;
  let fixture: ComponentFixture<PageProfilDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProfilDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProfilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
