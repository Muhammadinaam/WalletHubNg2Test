import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesDemoChildComponent } from './on-changes-demo-child.component';

describe('OnChangesDemoChildComponent', () => {
  let component: OnChangesDemoChildComponent;
  let fixture: ComponentFixture<OnChangesDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnChangesDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangesDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
