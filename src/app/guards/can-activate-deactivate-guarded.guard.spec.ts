import { TestBed } from '@angular/core/testing';

import { CanActivateDeactivateGuardedGuard } from './can-activate-deactivate-guarded.guard';

describe('CanActivateDeactivateGuardedGuard', () => {
  let guard: CanActivateDeactivateGuardedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateDeactivateGuardedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
