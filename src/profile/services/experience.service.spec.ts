import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Sequelize } from 'sequelize';
import { Experience } from '../models/experience.model';
import { ExperienceService } from './experience.service';
import { mockExperienceModel } from '../mocks/experience.model.mock';
import { experiencesMock } from '../mocks/experiences.mock';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExperienceService,
        {
          provide: Sequelize,
          useValue: {},
        },
        {
          provide: getModelToken(Experience),
          useValue: mockExperienceModel,
        },
      ],
    })
    .compile();

    service = module.get<ExperienceService>(ExperienceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find a experience', () => {
    it('should find a active experience record by id', async () => {
      await service.findOne(experiencesMock[0].id);
      expect(mockExperienceModel.findOne).toBeCalledWith({ where: { 
        id: experiencesMock[0].id,
        isActive: true 
      } });
    });

    it('should find a active experience record by profile id', async () => {
      await service.findByProfileId(experiencesMock[0].profileId);
      expect(mockExperienceModel.findOne).toBeCalledWith({ where: { 
        profileId: experiencesMock[0].profileId,
        isActive: true 
      } });
    });
  });
});
