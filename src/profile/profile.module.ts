import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from "@nestjs/config";
import config from "../config";
import { AuthModule } from "../auth/auth.module";

import { ProfileService } from './services/profile.service';
import { ProfileController } from './profile.controller';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [ProfileController],
  providers: [
    ConfigService, 
    ProfileService
  ]
})
export class ProfileModule {}
