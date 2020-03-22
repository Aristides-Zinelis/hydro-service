import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { River } from '../rivers.entity';

@Injectable()
export class RiversService {
    constructor(
        @InjectRepository(River)
        private riverRepository: Repository<River>,
    ) { }

    async  findAll(): Promise<River[]> {
        return await this.riverRepository.find();
    }

    async  create(contact: River): Promise<River> {
        return await this.riverRepository.save(contact);
    }

    async update(contact: River): Promise<UpdateResult> {
        return await this.riverRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.riverRepository.delete(id);
    }
}
