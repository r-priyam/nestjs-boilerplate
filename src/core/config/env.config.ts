// https://docs.nestjs.com/techniques/configuration#custom-validate-function

import { IsEnum, IsNotEmpty, IsPort, IsString } from 'class-validator';

enum Environment {
	DEVELOPMENT = 'development',
	PRODUCTION = 'production'
}

export class ConfigEnvironment {
	@IsEnum(Environment)
	ENV: Environment;

	@IsNotEmpty()
	@IsString()
	APP_NAME: string;

	@IsPort()
	PORT: string;

	@IsNotEmpty()
	@IsString()
	HOST: string;
}
