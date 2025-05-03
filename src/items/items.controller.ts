import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { Request } from '@nestjs/common/decorators';
import { ItemsService } from './items.service';
import { Item } from 'generated/prisma';
import { CreateItemDto } from './dto/create-items.dto';
import { ParseUUIDPipe } from '@nestjs/common/pipes/parse-uuid.pipe';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Request as ExpressRequest } from 'express';
import { RequestUser } from '../types/requestUser';

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
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Body() createItemDto: CreateItemDto,
    @Request() req: ExpressRequest & { user: RequestUser },
  ): Promise<Item> {
    return await this.itemsService.create(createItemDto, req.user.id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateStatus(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteItem(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req: ExpressRequest & { user: RequestUser },
  ) {
    await this.itemsService.delete(id, req.user.id);
  }
}
