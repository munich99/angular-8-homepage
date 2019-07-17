/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceMailService } from './service-mail.service';

describe('Service: ServiceMail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceMailService]
    });
  });

  it('should ...', inject([ServiceMailService], (service: ServiceMailService) => {
    expect(service).toBeTruthy();
  }));
});
