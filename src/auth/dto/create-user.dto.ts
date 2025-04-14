import { UserStatus } from 'generated/prisma';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { MinLength } from 'class-validator';
import { IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;

  @IsEnum(UserStatus)
  status: UserStatus;
}
