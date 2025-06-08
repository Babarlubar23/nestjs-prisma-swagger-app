import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class OwnerBasicDto {
  @ApiProperty({ example: 1, description: 'Unique identifier for the owner' })
  @Expose()
  id!: number;

  @ApiProperty({ example: 'Alice', description: 'First name of the owner' })
  @Expose()
  firstName!: string;

  @ApiProperty({ example: 'Goldenpaw', description: 'Last name of the owner' })
  @Expose()
  lastName!: string;

  @ApiProperty({ example: 'alice@example.com', description: 'Email address of the owner' })
  @Expose()
  email!: string;

  @ApiPropertyOptional({ example: '123-456-7890', description: 'Phone number of the owner' })
  @Expose()
  phone?: string;

  @ApiProperty({ example: 2, description: 'Total number of pets owned' })
  @Expose()
  petCount!: number;

  @ApiProperty({ example: [1, 2], description: 'IDs of pets owned by this owner' })
  @Expose()
  petIds!: number[];
}
