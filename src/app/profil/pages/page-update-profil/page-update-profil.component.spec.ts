import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateProfilComponent } from './page-update-profil.component';

describe('PageUpdateProfilComponent', () => {
  let component: PageUpdateProfilComponent;
  let fixture: ComponentFixture<PageUpdateProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUpdateProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
