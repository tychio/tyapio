import { experiencesMock } from "./experiences.mock";

export const mockExperienceModel = {
    findOne: jest.fn(() => experiencesMock[0]),
    findAll: jest.fn(() => experiencesMock)
}