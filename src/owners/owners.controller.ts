import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { OwnersService } from './owners.service';
import { AzureAdGuard } from '../auth';
import {
  ApiTags,
  ApiOkResponse,
  ApiBearerAuth,
  ApiResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { OwnerBasicDto } from './dto/owner-basic.dto';
import { OwnerFullDto } from './dto/owner-full.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { CommonLoggerService } from '../common/logging/logger.service';
import { instanceToPlain } from 'class-transformer';

@ApiTags('owners')
@ApiBearerAuth()
@Controller('api/owners')
export class OwnersController {
  constructor(
    private readonly ownersService: OwnersService,
    private readonly logger: CommonLoggerService,
  ) {}

  /**
   * Helper to serialize owners and remove all fields starting with _
   */
  private serializeOwners<T>(data: T | T[]): Record<string, unknown> | Record<string, unknown>[] {
    return instanceToPlain(data, { excludePrefixes: ['_'] });
  }

  @Get()
  @ApiOkResponse({ type: OwnerBasicDto, isArray: true, description: 'List of all owners' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    this.logger.withContext(OwnersController.name).log('OwnersController: findAll called');
    return this.ownersService.findAll().then(this.serializeOwners);
  }

  @Get('by-id/:id')
  @ApiOkResponse({ type: OwnerBasicDto, description: 'Owner details' })
  @ApiResponse({ status: 400, description: 'Invalid owner ID' })
  @ApiNotFoundResponse({ description: 'Owner not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    this.logger
      .withContext(OwnersController.name)
      .log(`OwnersController: findOne called with id ${id}`);
    try {
      const owner = await this.ownersService.findOne(id);
      if (!owner) throw new NotFoundException('Owner not found');
      return this.serializeOwners(owner);
    } catch (err) {
      console.error('Error in OwnersController.findOne', { context: OwnersController.name, err });
      throw err;
    }
  }

  /**
   * Find owners by last name and optionally by first name.
   *
   * - If only `lastName` is provided, returns all owners with that last name (may be multiple).
   * - If both `lastName` and `firstName` are provided, returns all owners matching both (usually one, but could be more).
   * - Returns 404 if no owners are found.
   *
   * Example:
   *   GET /owners/by-name/Smith           // returns all owners with lastName 'Smith'
   *   GET /owners/by-name/Smith/John      // returns all owners with lastName 'Smith' and firstName 'John'
   */
  @Get('by-name/:lastName')
  @ApiOkResponse({ type: OwnerBasicDto, isArray: true, description: 'Owners matching last name' })
  @ApiResponse({ status: 400, description: 'Invalid name' })
  @ApiNotFoundResponse({ description: 'No owners found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findByName(@Param('lastName') lastName: string, @Query('firstName') firstName?: string) {
    this.logger
      .withContext(OwnersController.name)
      .log(
        'OwnersController: findByName called with lastName=' +
          lastName +
          ', firstName=' +
          firstName,
      );
    const owners = await this.ownersService.findByName(lastName, firstName);
    if (!owners || owners.length === 0) throw new NotFoundException('No owners found');
    return this.serializeOwners(owners);
  }

  /**
   * Admin: Get full owner details by ID (with all pets as PetFullDto)
   */
  @Get('admin/by-id/:id')
  @UseGuards(AzureAdGuard, RolesGuard)
  @Roles('PetWarehouseAdmin')
  @ApiOkResponse({ type: OwnerFullDto, description: 'Full owner details (admin)' })
  @ApiResponse({ status: 400, description: 'Invalid owner ID' })
  @ApiNotFoundResponse({ description: 'Owner not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async adminFindOne(@Param('id', ParseIntPipe) id: number) {
    this.logger
      .withContext(OwnersController.name)
      .log('OwnersController: adminFindOne called with id ' + id);
    const owner = await this.ownersService.findFullById(id);
    if (!owner) throw new NotFoundException('Owner not found');
    return this.serializeOwners(owner);
  }

  /**
   * Admin: Find full owners by last name and optionally by first name.
   * Returns OwnerFullDto[] (with all pets as PetFullDto).
   */
  @Get('admin/by-name/:lastName')
  @UseGuards(AzureAdGuard, RolesGuard)
  @Roles('PetWarehouseAdmin')
  @ApiOkResponse({
    type: OwnerFullDto,
    isArray: true,
    description: 'Full owners matching name (admin)',
  })
  @ApiResponse({ status: 400, description: 'Invalid name' })
  @ApiNotFoundResponse({ description: 'No owners found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async adminFindByName(
    @Param('lastName') lastName: string,
    @Query('firstName') firstName?: string,
  ) {
    this.logger
      .withContext(OwnersController.name)
      .log(
        'OwnersController: adminFindByName called with lastName=' +
          lastName +
          ', firstName=' +
          firstName,
      );
    const owners = await this.ownersService.findFullByName(lastName, firstName);
    if (!owners || owners.length === 0) throw new NotFoundException('No owners found');
    return this.serializeOwners(owners);
  }
}
