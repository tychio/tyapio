import { profilesMock } from "./profiles.mock";

export const experiencesMock = [{
  id: 1,
  profileId: profilesMock[0].id,
  location: 'Xian',
  position: 'Developer',
  description: 'About this company something...',
  company: 'MyCompany',
  start: '2005-01-01 00:00:00',
  end: null,
  isActive: 1
}, {
  id: 2,
  profileId: profilesMock[1].id,
  location: 'Brussels',
  position: 'Manager',
  description: 'It was a great company, but...',
  company: 'ACompany',
  start: '2000-01-01 00:00:00',
  end: '2005-01-01 00:00:00',
  isActive: 1
}, {
  id: 3,
  profileId: profilesMock[1].id,
  location: 'Brussels',
  position: 'Freelancer',
  description: 'Acutally I am a self-employee...',
  company: 'ACompany',
  start: '2000-01-01 00:00:00',
  end: '2005-01-01 00:00:00',
  isActive: 0
}];
