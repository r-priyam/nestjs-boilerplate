import * as rfs from 'rotating-file-stream';
import { Injectable } from '@nestjs/common';
import { OgmaModuleOptions } from '@ogma/nestjs-module';
import { ModuleConfigFactory } from '@golevelup/nestjs-modules';

import { generateLogFilename } from './LogName';
import { AppConfig } from '../config/env.getters';

@Injectable()
export class OgmaModuleConfig implements ModuleConfigFactory<OgmaModuleOptions> {
	constructor(private readonly config: AppConfig) {}

	createModuleConfig(): OgmaModuleOptions {
		return {
			service: {
				color: this.config.isDevelopment,
				application: this.config.appName,
				// for more options please check https://github.com/iccicci/rotating-file-stream#options
				stream: rfs.createStream(generateLogFilename, {
					interval: '1d',
					path: './logs',
					teeToStdout: this.config.isDevelopment
				})
			}
		};
	}
}
