import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfig } from '@nestjs/config';

import { AppConfig } from './env.getters';
import { validate } from './env.validation';

@Module({
	imports: [NestConfig.forRoot({ validate, cache: true, isGlobal: true })],
	providers: [ConfigService, AppConfig],
	exports: [ConfigService, AppConfig]
})
export class ConfigModule {}
