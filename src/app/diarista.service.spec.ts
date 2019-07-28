import { TestBed } from '@angular/core/testing';

import { DiaristaService } from './diarista.service';

describe('DiaristaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiaristaService = TestBed.get(DiaristaService);
    expect(service).toBeTruthy();
  });
});
