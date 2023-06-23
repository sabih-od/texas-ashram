import { Test, TestingModule } from '@nestjs/testing';
import { StaffMembersController } from './staff-members.controller';
import { StaffMembersService } from './staff-members.service';

describe('StaffMembersController', () => {
  let controller: StaffMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffMembersController],
      providers: [StaffMembersService],
    }).compile();

    controller = module.get<StaffMembersController>(StaffMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
