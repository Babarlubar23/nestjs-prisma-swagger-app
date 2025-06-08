import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class BrendanCaneHistoryDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id!: number;

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z', format: 'date-time' })
  @Expose()
  date!: Date;

  @ApiPropertyOptional({ example: 'Routine checkup' })
  @Expose()
  notes?: string;
}
