import { TestBed } from '@angular/core/testing';

import { JerarquiaService } from './jerarquia.service';

describe('JerarquiaService', () => {
  let service: JerarquiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JerarquiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
