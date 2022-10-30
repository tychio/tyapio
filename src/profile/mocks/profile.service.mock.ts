import { profilesMock } from "./profiles.mock";

export const mockProfileService = {
  create: jest.fn(() => {}),
  update: jest.fn(() => {}),
  remove: jest.fn(() => {}),
  findOne: jest.fn(() => profilesMock[0]),
  findAll: jest.fn(() => profilesMock),
}