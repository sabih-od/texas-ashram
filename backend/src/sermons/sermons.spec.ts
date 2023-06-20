import { Test, TestingModule } from '@nestjs/testing';
import { Sermons } from './sermons';

describe('Sermons', () => {
  let provider: Sermons;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Sermons],
    }).compile();

    provider = module.get<Sermons>(Sermons);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
