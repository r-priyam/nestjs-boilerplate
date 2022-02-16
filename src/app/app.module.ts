import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/core/config/config.module';
import { LoggingModule } from 'src/core/logging/logging.module';
import { AppConfig } from '../core/config/env.getters';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [ConfigModule, LoggingModule],
    controllers: [AppController],
    providers: [AppConfig, AppService],
    exports: [AppConfig]
})
export class AppModule {}
