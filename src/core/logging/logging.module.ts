import { Module } from '@nestjs/common';
import { OgmaInterceptor, OgmaModule } from '@ogma/nestjs-module';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { OgmaModuleConfig } from '../logging/OgmaConfig';
import { ConfigModule } from 'src/core/config/config.module';

@Module({
	imports: [OgmaModule.forRootAsync({ useClass: OgmaModuleConfig, imports: [ConfigModule] })],
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: OgmaInterceptor
		}
	]
})
export class LoggingModule {}
