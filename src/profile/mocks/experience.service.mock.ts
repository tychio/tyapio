import { experiencesMock } from "./experiences.mock";

export const mockExperienceService = {
  create: jest.fn(() => {}),
  update: jest.fn(() => {}),
  remove: jest.fn(() => {}),
  findOne: jest.fn(() => experiencesMock[0]),
  findAll: jest.fn(() => experiencesMock),
}