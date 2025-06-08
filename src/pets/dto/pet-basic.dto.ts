import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude } from 'class-transformer';

@Exclude()
export class PetBasicDto {
  @ApiProperty({ example: 1, description: 'Unique identifier for the pet' })
  @Expose()
  id!: number;

  @ApiProperty({ example: 'Fluffy', description: 'Name of the pet' })
  @Expose()
  name!: string;

  @ApiProperty({ example: 'Cat', description: 'Species of the pet' })
  @Expose()
  species!: string;

  @ApiPropertyOptional({ example: 'Siamese', description: 'Breed of the pet' })
  @Expose()
  breed?: string;

  @ApiProperty({ example: 42, description: 'Unique identifier of the owner' })
  @Expose()
  ownerId!: number;

  @ApiProperty({
    example: 'Alice, Johnson',
    description: 'Full name of the owner (firstName, lastName)',
  })
  @Expose()
  get ownerFullName(): string {
    return `${this._ownerFirstName}, ${this._ownerLastName}`;
  }

  // Internal fields for mapping/cache only (not exposed in API responses; filtered in controller)
  @Expose()
  _ownerFirstName!: string;
  @Expose()
  _ownerLastName!: string;
}
