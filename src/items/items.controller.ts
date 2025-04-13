import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { ItemsService } from './items.service';
import { Item } from './items.model';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: string): Item {
    return this.itemsService.findById(id);
  }
  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    const item: Item = {
      id,
      name,
      price,
      description,
      status: 'ON_SALE',
    };
    return this.itemsService.create(item);
  }
  @Put(':id')
  updateStatus(@Param('id') id: string): Item {
    return this.itemsService.updateStatus(id);
  }
  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    this.itemsService.delete(id);
  }
}
