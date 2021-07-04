import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesShowComponent } from './classes-show.component';

describe('ClassesShowComponent', () => {
  let component: ClassesShowComponent;
  let fixture: ComponentFixture<ClassesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
