import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from '../core/config/env.validation';
import { AppConfig } from '../core/config/env.getters';

@Module({
	imports: [ConfigModule.forRoot({ validate, cache: true, isGlobal: true })],
	controllers: [AppController],
	providers: [AppConfig, AppService],
	exports: [AppConfig]
})
export class AppModule {}
