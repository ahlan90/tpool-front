import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaFormComponent } from './ficha-form.component';

describe('FichaFormComponent', () => {
  let component: FichaFormComponent;
  let fixture: ComponentFixture<FichaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
