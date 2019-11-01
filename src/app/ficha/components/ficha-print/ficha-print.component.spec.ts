import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPrintComponent } from './ficha-print.component';

describe('FichaPrintComponent', () => {
  let component: FichaPrintComponent;
  let fixture: ComponentFixture<FichaPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
