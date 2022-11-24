import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Base market')
    .setDescription('Document for REST API')
    .setVersion('1.0.0')
    .addTag('Atanynbasy')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document)

  await app.listen(PORT, () => console.log('Server started on port = ' + PORT));
}

start();