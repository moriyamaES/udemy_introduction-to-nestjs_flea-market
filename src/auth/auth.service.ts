import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'generated/prisma';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, email, password, status } = createUserDto;
    // eslint-disable-next-line
    return await this.prismaService.user.create({
      data: {
        name,
        email,
        password,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        status,
      },
    });
  }
}
