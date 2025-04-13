import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { ItemsService } from './items.service';
import { Item } from 'generated/prisma';
import { CreateItemDto } from './dto/create-items.dto';
import { ParseUUIDPipe } from '@nestjs/common/pipes/parse-uuid.pipe';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }
  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.itemsService.findById(id);
  }
  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }
  // @Put(':id')
  // updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
  //   return this.itemsService.updateStatus(id);
  // }
  @Delete(':id')
  deleteItem(@Param('id', ParseUUIDPipe) id: string): void {
    this.itemsService.delete(id);
  }
}
