import { Controller, Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';
import { River } from '../rivers.entity';
import { RiversService } from './rivers.service';

@Controller('rivers')
export class RiversController {
    constructor(private riversService: RiversService){}

    @Get()
    index(): Promise<River[]> {
      return this.riversService.findAll();
    } 

    @Post('create')
    async create(@Body() riverData: River): Promise<any> {
      return this.riversService.create(riverData);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() riverData: River): Promise<any> {
        riverData.id = Number(id);
        console.log('Update #' + riverData.id)
        return this.riversService.update(riverData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.riversService.delete(id);
    }  
}
