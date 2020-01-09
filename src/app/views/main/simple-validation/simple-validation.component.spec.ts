import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleValidationComponent } from './simple-validation.component';

describe('SimpleValidationComponent', () => {
  let component: SimpleValidationComponent;
  let fixture: ComponentFixture<SimpleValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
