import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteProfilComponent } from './page-delete-profil.component';

describe('PageDeleteProfilComponent', () => {
  let component: PageDeleteProfilComponent;
  let fixture: ComponentFixture<PageDeleteProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeleteProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeleteProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
