import { UserStatus } from 'generated/prisma';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { MinLength } from 'class-validator';
import { IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(8)
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  email: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEnum(UserStatus)
  status: UserStatus;
}
