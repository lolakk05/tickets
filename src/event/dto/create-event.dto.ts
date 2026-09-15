import { ApiProperty } from '@nestjs/swagger';
import { IsString, Min } from 'class-validator';

export class CreateEventDto {
  @ApiProperty({ description: 'The name of the event' })
  @IsString({ message: 'Event name must be a string' })
  @Min(1, { message: 'Event name must be at least 1 character long' })
  name!: string;

  @ApiProperty({ description: 'The description of the event' })
  @IsString({ message: 'Event description must be a string' })
  @Min(1, { message: 'Event description must be at least 1 character long' })
  description!: string;

  @ApiProperty({ description: 'The start date and time of the event' })
  startsAt!: Date;

  @ApiProperty({ description: 'The end date and time of the event' })
  endsAt!: Date;
}
