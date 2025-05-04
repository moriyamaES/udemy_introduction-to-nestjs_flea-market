import { Test } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { PrismaService } from '../prisma/prisma.service';

const mockPrismaService = {
  findMany: jest.fn(),
};

describe('ItemsService', () => {
  let itemsService;
  let prismaService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();
    itemsService = module.get<ItemsService>(ItemsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });
});
