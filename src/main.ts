import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Tyapio")
    .setDescription("Tychio's personal APIs documents")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api", app, document);

  await app.listen(configService.get("PORT", process.env.PORT || 3000))
    .then(v => console.log('Tyapio APIs Server Ready'))
    .catch(err => console.log('Tyapio APIs Server broken', JSON.stringify(err)));
}
bootstrap();
