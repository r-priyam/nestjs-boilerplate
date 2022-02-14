// https://docs.nestjs.com/techniques/configuration#custom-validate-function

import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { ConfigEnvironment } from './env.config';

export const validate = (config: Record<string, unknown>): ConfigEnvironment => {
    const validatedConfig = plainToClass(ConfigEnvironment, config, { enableImplicitConversion: true });

    const errors = validateSync(validatedConfig, { skipMissingProperties: false });

    if (errors.length > 0) throw new Error(errors.map((error) => error.toString()).join('\n'));
    return validatedConfig;
};
