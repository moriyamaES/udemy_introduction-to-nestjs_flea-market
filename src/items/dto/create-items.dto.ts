// import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min, IsOptional } from 'class-validator';
import { IsString, IsNotEmpty, MaxLength, IsInt, Min } from 'class-validator';
import { IsOptional } from 'class-validator';

export class CreateItemDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MaxLength(40)
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(1)
  price: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MaxLength(1000)
  description?: string;
}
