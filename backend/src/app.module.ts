import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GatosModule } from './gatos/gatos.module';
import { GatosService } from './gatos/gatos.service';
import { GatosController } from './gatos/gatos.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot("mongodb://root:example@database:27017/testDb?AuthSource=admin"), GatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
