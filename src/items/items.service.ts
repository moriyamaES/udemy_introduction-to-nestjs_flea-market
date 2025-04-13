import { Injectable, NotFoundException } from '@nestjs/common';
import { Item, ItemStatus } from 'generated/prisma';
import { CreateItemDto } from './dto/create-items.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prismaService: PrismaService) {}
  private items: Item[] = [];
  async findAll(): Promise<Item[]> {
    return await this.prismaService.item.findMany();
  }
  async findById(id: string): Promise<Item> {
    const found = await this.prismaService.item.findUnique({
      where: {
        id,
      },
    });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price, description } = createItemDto;
    return await this.prismaService.item.create({
      data: {
        name,
        price,
        description,
        status: ItemStatus.ON_SALE,
      },
    });
  }
  // updateStatus(id: string): Item {
  //   const item = this.findById(id);
  //   item.status = 'SOLD_OUT';
  //   return item;
  // }
  delete(id: string): void {
    const item = this.findById(id);
    this.items = this.items.filter((item) => item.id !== id);
  }
}
