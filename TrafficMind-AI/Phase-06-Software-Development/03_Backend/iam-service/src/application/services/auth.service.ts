import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository, USER_REPOSITORY } from '../../domain/user.repository.interface';
import { LoginDto } from '../dto/login.dto';
import { AuthResponseDto } from '../dto/auth-response.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate(loginDto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.userRepository.findByEmail(loginDto.email);

    if (!user || !user.isActive) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // In a production scenario, we would use bcrypt to compare hashes.
    // For Sprint 1 mocking, we assume raw string equality or a simple match.
    if (user.passwordHash !== loginDto.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email, roles: user.roles };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken,
      userId: user.id,
      roles: user.roles,
    };
  }
}
