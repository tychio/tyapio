import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Sequelize } from 'sequelize';
import { Profile } from '../models/profile.model';
import { ProfileService } from './profile.service';
import { mockProfileModel } from '../mocks/profile.model.mock';
import { profilesMock } from '../mocks/profiles.mock';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileService,
        {
          provide: Sequelize,
          useValue: {},
        },
        {
          provide: getModelToken(Profile),
          useValue: mockProfileModel,
        },
      ],
    })
    .compile();

    service = module.get<ProfileService>(ProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find a profile by id', () => {
    it('should find a active profile record by id', async () => {
      await service.findOne(profilesMock[0].id);
      expect(mockProfileModel.findOne).toBeCalledWith({ where: { 
        id: profilesMock[0].id,
        isActive: true 
      } });
    });
  });
});
