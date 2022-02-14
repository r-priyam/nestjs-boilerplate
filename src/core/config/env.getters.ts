import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfig {
    constructor(private configService: ConfigService) {}

    get isDevelopment(): boolean {
        return this.configService.get('ENV') === 'development';
    }

    get appName(): string {
        return this.configService.get('APP_NAME');
    }

    get port(): number {
        return this.configService.get('PORT');
    }

    get host(): string {
        return this.configService.get('HOST');
    }

    get corsOrigins(): string[] {
        return this.configService.get('CORS_ORIGINS').split(', ');
    }

    get cookieSignSecret(): string {
        return this.configService.get('COOKIE_SECRET');
    }
}
