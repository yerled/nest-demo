import { Test, TestingModule } from '@nestjs/testing';
import { FuckerService } from './fucker.service';

describe('FuckerService', () => {
  let service: FuckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuckerService],
    }).compile();

    service = module.get<FuckerService>(FuckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
