import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { ItemsService } from './items.service';
import { Item } from './items.model';
import { CreateItemDto } from './dto/create-items.dto';

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
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
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
