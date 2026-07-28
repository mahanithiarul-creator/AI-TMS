import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/user.repository.interface';
import { User } from '../../domain/user.entity';
import { Role } from '../../domain/role.enum';

@Injectable()
export class MockUserRepository implements UserRepository {
  private readonly users: User[] = [
    new User('u1', 'admin@trafficmind.gov', 'admin123', [Role.ADMINISTRATOR], true),
    new User('u2', 'operator@trafficmind.gov', 'operator123', [Role.OPERATOR], true),
    new User('u3', 'supervisor@trafficmind.gov', 'super123', [Role.SUPERVISOR], true),
  ];

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(u => u.id === id) || null;
  }
}
