import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // This method is called when the module is initialized
    // It is a good place to connect to the database
    // and perform any necessary setup
    // For example, you can run migrations or seed the database
    // await this.$connect();
    // await this.$executeRaw`SELECT 1`;
    await this.$connect();
  }
}
