import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestDemoComponent } from './unit-test-demo.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DummyAuthService } from '../../../services/dummy-auth.service';

fdescribe('Unit Tests for UnitTestDemoComponent', () => {
  let component: UnitTestDemoComponent;
  let fixture: ComponentFixture<UnitTestDemoComponent>;
  let debugElement: DebugElement;
  let authService: DummyAuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestDemoComponent ],
      providers: [DummyAuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestDemoComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(DummyAuthService);
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  afterEach(() => {
    // reset
    component.count = 0;
  });

  it('Header should be "Unit Tests Demo"', () => {
    let cardHeader = debugElement.query(By.css('.card-header'));
    expect(cardHeader.nativeElement.textContent.trim()).toBe('Unit Tests Demo');
  });

  it('Is User Logged In should show "Yes" when DummyAuthService.isLoggedIn() returns true', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    fixture.detectChanges();
    let loginStatusBadge = debugElement.query(By.css('.badge'));
    expect(loginStatusBadge.nativeElement.textContent.trim()).toBe('Yes');
  });

  it('Is User Logged In should show "No" when DummyAuthService.isLoggedIn() returns false', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    fixture.detectChanges();
    let loginStatusBadge = debugElement.query(By.css('.badge'));
    expect(loginStatusBadge.nativeElement.textContent.trim()).toBe('No');
  });

  it('Counter should be 0 initially', () => {
    let counter = debugElement.query(By.css('.counter'));
    expect(counter.nativeElement.textContent.trim()).toBe('0');
  });

  it('Counter should be bound to "count" property', () => {
    let countValue = 15;
    component.count = countValue;
    fixture.detectChanges();
    let counter = debugElement.query(By.css('.counter'));
    expect(counter.nativeElement.textContent.trim()).toBe(countValue.toString());
  });

  it('plusBtnClicked method should be called on click of + button', () => {

    const onClickMock = spyOn(component, 'plusBtnClicked');

    let button = debugElement.query(By.css('.btn-plus'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(onClickMock).toHaveBeenCalled();
  });

  it('Counter value should be increased by 1 when + button is clicked', () => {

    let countValue = 15;
    component.count = countValue;
    fixture.detectChanges();

    let button = debugElement.query(By.css('.btn-plus'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    let counter = debugElement.query(By.css('.counter'));
    expect(counter.nativeElement.textContent.trim()).toBe((countValue+1).toString());
  });

  it('minusBtnClicked method should be called on click of - button', () => {

    const onClickMock = spyOn(component, 'minusBtnClicked');

    let button = debugElement.query(By.css('.btn-minus'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(onClickMock).toHaveBeenCalled();
  });

  it('Counter value should be decreased by 1 when - button is clicked', () => {

    let countValue = 15;
    component.count = countValue;
    fixture.detectChanges();

    let button = debugElement.query(By.css('.btn-minus'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    let counter = debugElement.query(By.css('.counter'));
    expect(counter.nativeElement.textContent.trim()).toBe((countValue-1).toString());
  });
});
