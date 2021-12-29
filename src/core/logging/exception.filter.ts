// https://docs.nestjs.com/exception-filters#catch-everything

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { OgmaService } from '@ogma/nestjs-module';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
	constructor(private readonly httpAdapterHost: HttpAdapterHost, private readonly logger: OgmaService) {}

	catch(exception: any, host: ArgumentsHost): void {
		this.logger.printError(exception);
		const { httpAdapter } = this.httpAdapterHost;
		const ctx = host.switchToHttp();
		const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

		const responseBody = {
			statusCode: httpStatus,
			timestamp: new Date().toISOString(),
			path: httpAdapter.getRequestUrl(ctx.getRequest())
		};
		httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
	}
}
