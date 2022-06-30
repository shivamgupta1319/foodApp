import { Test, TestingModule } from '@nestjs/testing';
import { foodService } from './foodRecipe.service';

describe('foodService', () => {
  let service: foodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [foodService],
    }).compile();

    service = module.get<foodService>(foodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
