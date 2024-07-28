import {
  ExceptionFilter as ExceptionFilterNest,
  Catch,
  ArgumentsHost,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';

@Catch(BadRequestException)
export class ExceptionFilter implements ExceptionFilterNest {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = HttpStatus.BAD_REQUEST;

    response.status(status).json({
      statusCode: status,
      message: 'Bad request',
    });
  }
}
