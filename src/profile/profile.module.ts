import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from "@nestjs/config";
import config from "../config";
import { AuthModule } from "../auth/auth.module";

import { ProfileService } from './services/profile.service';
import { ProfileController } from './profile.controller';
import { Profile } from './entities/profile.entity';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('db.host'),
        port: configService.get('db.port'),
        username: configService.get('db.user'),
        password: configService.get('db.pass'),
        database: configService.get('db.name'),
        synchronize: !configService.get('prod'),
        entities: [
          Profile
        ]
      })
    })
  ],
  controllers: [ProfileController],
  providers: [
    ConfigService, 
    ProfileService
  ]
})
export class ProfileModule {}
