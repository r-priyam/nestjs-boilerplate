import { NestFactory } from '@nestjs/core';
import { OgmaService } from '@ogma/nestjs-module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app/app.module';
import { AppConfig } from './core/config/env.getters';

async function main() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
		bufferLogs: true,
		logger: false
	});
	const config = app.get(AppConfig);
	const logger = app.get<OgmaService>(OgmaService);
	app.useLogger(logger);

	await app.listen(config.port, config.host);
	logger.info(`Application is running on: ${await app.getUrl()}`, { context: 'MAIN' });
}

main();
