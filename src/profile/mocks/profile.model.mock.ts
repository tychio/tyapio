import { profilesMock } from "./profiles.mock";

export const mockProfileModel = {
    findOne: jest.fn(() => profilesMock[0]),
}