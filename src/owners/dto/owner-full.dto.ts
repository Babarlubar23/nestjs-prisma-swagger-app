import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';
import { PetFullDto } from '../../pets/dto/pet-full.dto';

@Exclude()
export class OwnerFullDto {
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

  @ApiPropertyOptional({ example: '123 Main St', description: 'Address of the owner' })
  @Expose()
  address?: string;

  @ApiProperty({
    type: () => [PetFullDto],
    description: 'All pets owned by this owner (full PetFullDto)',
  })
  @Expose()
  pets!: PetFullDto[];
}
