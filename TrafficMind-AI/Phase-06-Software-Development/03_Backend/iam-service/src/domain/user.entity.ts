import { Role } from './role.enum';

export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly passwordHash: string,
    public readonly roles: Role[],
    public readonly isActive: boolean,
  ) {}

  public hasRole(role: Role): boolean {
    return this.roles.includes(role);
  }
}
