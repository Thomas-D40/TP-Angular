import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElmtNotFoundComponent } from './page-elmt-not-found.component';

describe('PageElmtNotFoundComponent', () => {
  let component: PageElmtNotFoundComponent;
  let fixture: ComponentFixture<PageElmtNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageElmtNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageElmtNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
