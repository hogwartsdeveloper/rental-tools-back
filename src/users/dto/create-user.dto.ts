import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.kz', description: 'Email'})
  readonly email: string;

  @ApiProperty({ example: 'Qwerty123', description: 'Password'})
  readonly password: string;
}