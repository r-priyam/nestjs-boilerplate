import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';

async function main() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
	await app.listen(3000);
}
main();
