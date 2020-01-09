import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineTenComponent } from './nine-ten.component';

describe('NineTenComponent', () => {
  let component: NineTenComponent;
  let fixture: ComponentFixture<NineTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
