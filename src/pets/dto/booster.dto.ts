import { ApiProperty } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class BoosterDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id!: number;

  @ApiProperty({ example: 'Rabies' })
  @Expose()
  name!: string;

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z', format: 'date-time' })
  @Expose()
  date!: Date;

  @ApiProperty({ example: 1 })
  @Expose()
  petId!: number;
}
