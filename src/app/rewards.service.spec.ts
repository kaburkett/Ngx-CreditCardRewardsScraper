import { TestBed, inject } from '@angular/core/testing';

import { RewardsService } from './rewards.service';

describe('RewardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RewardsService]
    });
  });

  it('should be created', inject([RewardsService], (service: RewardsService) => {
    expect(service).toBeTruthy();
  }));
});
