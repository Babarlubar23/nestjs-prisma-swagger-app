import { Controller, Get, Param, ParseIntPipe, UseGuards, NotFoundException, Query } from '@nestjs/common';
import { PetsService } from './pets.service';
import { AzureAdGuard } from '../auth';
import {
  ApiTags,
  ApiOkResponse,
  ApiBearerAuth,
  ApiResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { PetBasicDto } from './dto/pet-basic.dto';
import { PetFullDto } from './dto/pet-full.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { CommonLoggerService } from '../common/logging/logger.service';
import { instanceToPlain } from 'class-transformer';

@ApiTags('pets')
@ApiBearerAuth()
@Controller('api/pets')
export class PetsController {
  constructor(
    private readonly petsService: PetsService,
    private readonly logger: CommonLoggerService,
  ) {}

  /**
   * Helper to serialize pets and remove all fields starting with _
   */
  private serializePets<T>(data: T | T[]): any {
    return instanceToPlain(data, { excludePrefixes: ['_'] });
  }

  @Get()
  @ApiOkResponse({ type: PetBasicDto, isArray: true, description: 'List of all pets' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll() {
    this.logger.withContext(PetsController.name).log('PetsController: findAll called');
    const pets = await this.petsService.findAll();
    return this.serializePets(pets);
  }

  @Get('by-id/:id')
  @ApiOkResponse({ type: PetBasicDto, description: 'Pet details' })
  @ApiResponse({ status: 400, description: 'Invalid pet ID' })
  @ApiNotFoundResponse({ description: 'Pet not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.withContext(PetsController.name).log(`PetsController: findOne called with id ${id}`);
    try {
      const pet = await this.petsService.findOne(id);
      if (!pet) throw new NotFoundException('Pet not found');
      return this.serializePets(pet);
    } catch (err) {
      this.logger.withContext(PetsController.name).error(`Error in PetsController.findOne: ${err}`);
      throw err;
    }
  }

  /**
   * Get all pets for a given owner by owner ID.
   * Example: GET /pets/by-owner-id/123
   */
  @Get('by-owner-id/:ownerId')
  @ApiOkResponse({
    type: PetBasicDto,
    isArray: true,
    description: 'All pets for the given owner ID',
  })
  @ApiResponse({ status: 400, description: 'Invalid owner ID' })
  @ApiNotFoundResponse({ description: 'No pets found for this owner' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findByOwnerId(@Param('ownerId', ParseIntPipe) ownerId: number) {
    this.logger.withContext(PetsController.name).log(`PetsController: findByOwnerId called with ownerId=${ownerId}`);
    const pets = await this.petsService.findByOwnerId(ownerId);
    if (!pets || pets.length === 0) throw new NotFoundException('No pets found for this owner');
    return this.serializePets(pets);
  }

  /**
   * Get all pets for a given owner by last name and (optionally) first name.
   * Example: GET /pets/by-owner-name/Smith or /pets/by-owner-name/Smith/John
   */
  @Get('by-owner-name/:lastName')
  @ApiOkResponse({
    type: PetBasicDto,
    isArray: true,
    description: 'All pets for the given owner name',
  })
  @ApiResponse({ status: 400, description: 'Invalid owner name' })
  @ApiNotFoundResponse({ description: 'No pets found for this owner' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findByOwnerName(
    @Param('lastName') lastName: string,
    @Query('firstName') firstName?: string,
  ) {
    this.logger.withContext(PetsController.name).log(
      `PetsController: findByOwnerName called with lastName=${lastName}, firstName=${firstName}`,
    );
    const pets = await this.petsService.findByOwnerName(lastName, firstName);
    if (!pets || pets.length === 0) throw new NotFoundException('No pets found for this owner');
    return this.serializePets(pets);
  }

  /**
   * Admin: Get all pets for a given owner by owner ID (returns PetFullDto[])
   * Example: GET /pets/admin/by-owner-id/123
   */
  @Get('admin/by-owner-id/:ownerId')
  @UseGuards(AzureAdGuard, RolesGuard)
  @Roles('PetWarehouseAdmin')
  @ApiOkResponse({
    type: PetFullDto,
    isArray: true,
    description: 'All pets for the given owner ID (admin, full details)',
  })
  @ApiResponse({ status: 400, description: 'Invalid owner ID' })
  @ApiNotFoundResponse({ description: 'No pets found for this owner' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async adminFindByOwnerId(@Param('ownerId', ParseIntPipe) ownerId: number) {
    this.logger.withContext(PetsController.name).log(`PetsController: adminFindByOwnerId called with ownerId=${ownerId}`);
    const pets = await this.petsService.findFullByOwnerId(ownerId);
    if (!pets || pets.length === 0) throw new NotFoundException('No pets found for this owner');
    return this.serializePets(pets);
  }

  /**
   * Admin: Get all pets for a given owner by last name and (optionally) first name (returns PetFullDto[])
   * Example: GET /pets/admin/by-owner-name/Smith or /pets/admin/by-owner-name/Smith/John
   */
  @Get('admin/by-owner-name/:lastName')
  @UseGuards(AzureAdGuard, RolesGuard)
  @Roles('PetWarehouseAdmin')
  @ApiOkResponse({
    type: PetFullDto,
    isArray: true,
    description: 'All pets for the given owner name (admin, full details)',
  })
  @ApiResponse({ status: 400, description: 'Invalid owner name' })
  @ApiNotFoundResponse({ description: 'No pets found for this owner' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async adminFindByOwnerName(
    @Param('lastName') lastName: string,
    @Query('firstName') firstName?: string,
  ) {
    this.logger.withContext(PetsController.name).log(
      `PetsController: adminFindByOwnerName called with lastName=${lastName}, firstName=${firstName}`,
    );
    const pets = await this.petsService.findFullByOwnerName(lastName, firstName);
    if (!pets || pets.length === 0) throw new NotFoundException('No pets found for this owner');
    return this.serializePets(pets);
  }
}
