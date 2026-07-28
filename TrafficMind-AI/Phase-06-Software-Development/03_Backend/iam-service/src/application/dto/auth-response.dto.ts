import { Role } from '../../domain/role.enum';

export class AuthResponseDto {
  accessToken!: string;
  userId!: string;
  roles!: Role[];
}
