import { Test, TestingModule } from '@nestjs/testing';
import { PageMediaController } from './page-media.controller';
import { PageMediaService } from './page-media.service';

describe('PageMediaController', () => {
  let controller: PageMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageMediaController],
      providers: [PageMediaService],
    }).compile();

    controller = module.get<PageMediaController>(PageMediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
