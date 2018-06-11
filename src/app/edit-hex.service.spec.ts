import { TestBed, inject } from '@angular/core/testing';

import { EditHexService } from './edit-hex.service';

describe('EditHexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditHexService]
    });
  });

  it('should be created', inject([EditHexService], (service: EditHexService) => {
    expect(service).toBeTruthy();
  }));
});
