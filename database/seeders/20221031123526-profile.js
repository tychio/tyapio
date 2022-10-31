'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Profiles', [{
      id: 1,
      locale: 'cn',
      cnName: '张铮铮',
      enName: 'Zhengzheng Zhang',
      avatar: '',
      position: 'Web前端工程师/高级软件咨询师/全栈开发者',
      bio: '远程自由开发，更加灵活的工作和沟通，使用前沿的技术，实现更高的客',
      email: 'work@tychio.net',
      phone: '',
      birthday: '1988-01-26 02:50:00',
      country: '中国',
      isActive: 1
    }, {
      id: 2,
      locale: 'en',
      cnName: '张铮铮',
      enName: 'Zhengzheng Zhang',
      avatar: '',
      position: 'Front-end Engineer/Senior Consultant/Full stack developer',
      bio: `Remote freelancer, working and communicating with more agile. It's important that realizing client value using advanced technology.`,
      email: 'work@tychio.net',
      phone: '',
      birthday: '1988-01-26 02:50:00',
      country: 'China',
      isActive: 1
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
