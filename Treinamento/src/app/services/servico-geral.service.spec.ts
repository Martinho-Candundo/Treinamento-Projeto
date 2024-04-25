import { TestBed } from '@angular/core/testing';

import { ServicoGeralService } from './servico-geral.service';

describe('ServicoGeralService', () => {
  let service: ServicoGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
