import { Test, TestingModule } from '@nestjs/testing';
import { FuckerController } from './fucker.controller';

describe('FuckerController', () => {
  let controller: FuckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuckerController],
    }).compile();

    controller = module.get<FuckerController>(FuckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
