import { Test, TestingModule } from '@nestjs/testing';
import { mockProfileService } from './mocks/profile.service.mock';
import { ProfileController } from './profile.controller';
import { ProfileService } from './services/profile.service';

describe('ProfileController', () => {
  let controller: ProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileController],
      providers: [ProfileService],
    })
    .overrideProvider(ProfileService)
    .useValue(mockProfileService)
    .compile();

    controller = module.get<ProfileController>(ProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Profiles', () => {
    it('should get profile by id', async () => {
      await controller.findOne('1');
      expect(mockProfileService.findOne).toHaveBeenCalledWith(1);
    });
  });
});
