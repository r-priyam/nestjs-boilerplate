// https://docs.nestjs.com/techniques/configuration#custom-validate-function

import { IsEnum, IsNotEmpty, IsPort, IsString } from 'class-validator';

enum Environment {
	DEVELOPMENT = 'development',
	PRODUCTION = 'production'
}

export class ConfigEnvironment {
	@IsEnum(Environment)
	ENV: Environment;

	@IsPort()
	PORT: string;

	@IsNotEmpty()
	@IsString()
	HOST: string;
}
