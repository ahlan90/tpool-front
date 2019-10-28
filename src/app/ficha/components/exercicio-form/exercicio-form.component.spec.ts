import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioFormComponent } from './exercicio-form.component';

describe('ExercicioFormComponent', () => {
  let component: ExercicioFormComponent;
  let fixture: ComponentFixture<ExercicioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
