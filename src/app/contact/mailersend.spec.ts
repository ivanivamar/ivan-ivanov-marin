import { TestBed } from '@angular/core/testing';

import { Mailersend } from './mailersend';

describe('Mailersend', () => {
  let service: Mailersend;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mailersend);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
