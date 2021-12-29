import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app/app.module';
import { AppConfig } from './core/config/env.getters';

async function main() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
	const config = app.get(AppConfig);
	await app.listen(config.port, config.host);
}
main();
