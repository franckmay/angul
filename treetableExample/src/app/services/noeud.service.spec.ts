import { TestBed } from '@angular/core/testing';

import { NoeudService } from './noeud.service';

describe('NoeudService', () => {
  let service: NoeudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoeudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
