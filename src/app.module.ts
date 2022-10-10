import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import config from "./config";
import { AuthModule } from "./auth/auth.module";
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      load: [config],
    }),
    ClientsModule,
  ],
  controllers: [
  ],
  providers: [
    ConfigService
  ],
})
export class AppModule {}
