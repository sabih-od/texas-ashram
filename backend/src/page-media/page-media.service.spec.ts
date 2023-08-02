import { Test, TestingModule } from '@nestjs/testing';
import { PageMediaService } from './page-media.service';

describe('PageMediaService', () => {
  let service: PageMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PageMediaService],
    }).compile();

    service = module.get<PageMediaService>(PageMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
