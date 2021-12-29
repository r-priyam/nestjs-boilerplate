import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfig {
	constructor(private configService: ConfigService) {}

	get isDevelopment(): boolean {
		return this.configService.get('ENV') === 'development';
	}

	get port(): number {
		return this.configService.get('PORT');
	}

	get host(): string {
		return this.configService.get('HOST');
	}
}
