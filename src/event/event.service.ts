import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EventService {
  constructor(private database: DatabaseService) {}

  async create(createEventDto: CreateEventDto) {
    return await this.database.event.create({
      data: {
        name: createEventDto.name,
        description: createEventDto.description,
        startsAt: createEventDto.startsAt,
        endsAt: createEventDto.endsAt,
      },
    });
  }

  async findAll() {
    return await this.database.event.findMany();
  }

  async findOne(id: number) {
    const result = await this.database.event.findUnique({
      where: {
        eventId: id,
      },
    });
    if (result === null) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return result;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    await this.findOne(id);
    return this.database.event.update({
      where: {
        eventId: id,
      },
      data: {
        name: updateEventDto.name,
        description: updateEventDto.description,
        startsAt: updateEventDto.startsAt,
        endsAt: updateEventDto.endsAt,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.database.event.delete({
      where: {
        eventId: id,
      },
    });
  }
}
