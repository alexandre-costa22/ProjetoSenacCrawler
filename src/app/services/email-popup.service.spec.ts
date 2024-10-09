import { TestBed } from '@angular/core/testing';

import { EmailPopupService } from './email-popup.service';

describe('EmailPopupService', () => {
  let service: EmailPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
