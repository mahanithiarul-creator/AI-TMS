import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../src/application/services/auth.service';
import { USER_REPOSITORY } from '../src/domain/user.repository.interface';
import { MockUserRepository } from '../src/infrastructure/repositories/mock-user.repository';
import { UnauthorizedException } from '@nestjs/common';
import { Role } from '../src/domain/role.enum';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: USER_REPOSITORY,
          useClass: MockUserRepository,
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockResolvedValue('mockJwtToken'),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should authenticate valid user and return token', async () => {
    const result = await service.authenticate({
      email: 'admin@trafficmind.gov',
      password: 'admin123',
    });

    expect(result.accessToken).toBe('mockJwtToken');
    expect(result.userId).toBe('u1');
    expect(result.roles).toContain(Role.ADMINISTRATOR);
    expect(jwtService.signAsync).toHaveBeenCalled();
  });

  it('should throw UnauthorizedException for invalid password', async () => {
    await expect(
      service.authenticate({ email: 'admin@trafficmind.gov', password: 'wrong' }),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException for non-existent user', async () => {
    await expect(
      service.authenticate({ email: 'nobody@trafficmind.gov', password: '123' }),
    ).rejects.toThrow(UnauthorizedException);
  });
});
