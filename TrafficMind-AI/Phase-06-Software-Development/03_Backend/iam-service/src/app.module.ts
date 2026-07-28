import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './presentation/auth.controller';
import { AuthService } from './application/services/auth.service';
import { MockUserRepository } from './infrastructure/repositories/mock-user.repository';
import { USER_REPOSITORY } from './domain/user.repository.interface';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'SUPER_SECRET_TRAFFICMIND_KEY_DO_NOT_USE_IN_PROD',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: USER_REPOSITORY,
      useClass: MockUserRepository,
    },
  ],
})
export class AppModule {}
