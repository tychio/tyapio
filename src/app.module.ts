import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ProfileModule,
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get('db.host'),
        port: configService.get('db.port'),
        username: configService.get('db.user'),
        password: configService.get('db.pass'),
        database: configService.get('db.name'),
        synchronize: !configService.get('prod'),
        autoLoadModels: true,
        models: [__dirname + '/models']
      })
    })
  ],
})
export class AppModule {}
