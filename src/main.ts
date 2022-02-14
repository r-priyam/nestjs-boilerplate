import { NestFactory } from '@nestjs/core';
import fastifyCookie from 'fastify-cookie';
import { OgmaService } from '@ogma/nestjs-module';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';

import { AppModule } from './app/app.module';
import { AppConfig } from './core/config/env.getters';

declare const module: any;

async function main() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
        bufferLogs: true,
        logger: false
    });
    const config = app.get(AppConfig);
    const logger = app.get<OgmaService>(OgmaService);

    app.useLogger(logger);
    app.register(fastifyCookie, { secret: config.cookieSignSecret });
    app.enableCors({ origin: config.corsOrigins, credentials: true });

    await app.listen(config.port, config.host);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }

    logger.info(`Application is running on: ${await app.getUrl()}`, { context: 'MAIN' });
}

main();
