import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { GatewayController } from './controllers/gateway.controller';
import { RequestLoggerMiddleware } from './middleware/request-logger.middleware';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      // In production, this would be the PUBLIC key matching the IAM service's private key.
      secret: 'SUPER_SECRET_TRAFFICMIND_KEY_DO_NOT_USE_IN_PROD',
    }),
  ],
  controllers: [GatewayController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestLoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
