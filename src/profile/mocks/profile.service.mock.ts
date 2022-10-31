import { profilesMock } from "./profiles.mock";

export const mockProfileService = {
  create: jest.fn(() => {}),
  update: jest.fn(() => {}),
  remove: jest.fn(() => {}),
  findOne: jest.fn(() => profilesMock[0]),
  findByProfileId: jest.fn(() => profilesMock[1]),
  findAll: jest.fn(() => profilesMock),
}