import { Test, TestingModule } from '@nestjs/testing';
import { EventService } from './event.service';
import { DatabaseService } from 'src/database/database.service';

describe('EventService', () => {
  let service: EventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventService, DatabaseService],
    }).compile();

    service = module.get<EventService>(EventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
