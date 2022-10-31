import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Experience } from '../models/experience.model';
import { CreateExperienceDto } from '../dto/create-experience.dto';
import { UpdateExperienceDto } from '../dto/update-experience.dto';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience)
    private experienceModel: typeof Experience,
  ) {}

  create(createExperienceDto: CreateExperienceDto) {
    return 'This action adds a new experience';
  }

  findAll() {
    return `This action returns all experience`;
  }

  findOne(id: number) {
    return this.experienceModel.findOne({ where: { id, isActive: true } })
  }

  findByProfileId(profileId: number) {
    return this.experienceModel.findAll({ where: { profileId, isActive: true } })
  }

  update(id: number, updateExperienceDto: UpdateExperienceDto) {
    return `This action updates a #${id} experience`;
  }

  remove(id: number) {
    return `This action removes a #${id} experience`;
  }
}
