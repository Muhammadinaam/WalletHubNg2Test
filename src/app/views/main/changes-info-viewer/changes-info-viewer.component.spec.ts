import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesInfoViewerComponent } from './changes-info-viewer.component';

describe('ChangesInfoViewerComponent', () => {
  let component: ChangesInfoViewerComponent;
  let fixture: ComponentFixture<ChangesInfoViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesInfoViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesInfoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
