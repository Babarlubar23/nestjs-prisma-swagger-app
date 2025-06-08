import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';
import { BoosterDto } from './booster.dto';
import { BrendanCaneHistoryDto } from './brendan-cane-history.dto';
import { OwnerBasicDto } from '../../owners/dto/owner-basic.dto';

@Exclude()
export class PetFullDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id!: number;

  @ApiProperty({ example: 'Fluffy' })
  @Expose()
  name!: string;

  @ApiProperty({ example: 'Cat' })
  @Expose()
  species!: string;

  @ApiPropertyOptional({ example: 'Siamese' })
  @Expose()
  breed?: string;

  @ApiPropertyOptional({ example: '2020-01-01T00:00:00.000Z' })
  @Expose()
  birthDate?: Date;

  @ApiProperty({ example: true })
  @Expose()
  vaccinated!: boolean;

  @ApiPropertyOptional({ example: '2021-01-01T00:00:00.000Z' })
  @Expose()
  vaccinationDate?: Date;

  @ApiProperty({
    type: () => [BoosterDto],
    description: 'Booster shots for the pet (full Booster entity)',
  })
  @Expose()
  boosters!: BoosterDto[];

  @ApiPropertyOptional({
    type: () => [BrendanCaneHistoryDto],
    description: 'Brendan cane history for the pet',
  })
  @Expose()
  brendanCaneHistory?: BrendanCaneHistoryDto[];

  @ApiProperty({ type: () => OwnerBasicDto })
  @Expose()
  owner!: OwnerBasicDto;

  @ApiPropertyOptional({
    type: () => [BrendanCaneHistoryDto],
    description: 'Brendan cane history for the pet (legacy mapping compatibility)',
  })
  @Expose()
  brendanCane?: BrendanCaneHistoryDto[];
}
