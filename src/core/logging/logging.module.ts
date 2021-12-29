import { Module } from '@nestjs/common';
import { OgmaModule } from '@ogma/nestjs-module';

import { OgmaModuleConfig } from '../logging/OgmaConfig';
import { ConfigModule } from 'src/core/config/config.module';

@Module({
	imports: [OgmaModule.forRootAsync({ useClass: OgmaModuleConfig, imports: [ConfigModule] })]
})
export class LoggingModule {}
