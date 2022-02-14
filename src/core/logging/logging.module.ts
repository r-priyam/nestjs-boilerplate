import { Module } from '@nestjs/common';
import { OgmaInterceptor, OgmaModule } from '@ogma/nestjs-module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { OgmaModuleConfig } from '../logging/OgmaConfig';
import { ConfigModule } from 'src/core/config/config.module';
import { ExceptionsFilter } from './exception.filter';

@Module({
    imports: [OgmaModule.forRootAsync({ useClass: OgmaModuleConfig, imports: [ConfigModule] })],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: OgmaInterceptor
        },
        {
            provide: APP_FILTER,
            useClass: ExceptionsFilter
        }
    ]
})
export class LoggingModule {}
