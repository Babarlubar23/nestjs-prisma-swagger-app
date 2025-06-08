import { createMap, forMember, mapFrom, MappingProfile, createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import { PetBasicDto } from './dto/pet-basic.dto';

// Use a plain interface for source type
export const petProfile: MappingProfile = (mapper) => {
  createMap(
    mapper,
    Object,
    PetBasicDto,
    forMember(
      (d) => d.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.id),
    ),
    forMember(
      (d) => d.name,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.name),
    ),
    forMember(
      (d) => d.species,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.species),
    ),
    forMember(
      (d) => d.breed,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.breed ?? undefined),
    ),
    forMember(
      (d) => d.ownerId,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.ownerId ?? (s.owner ? s.owner.id : undefined)),
    ),
    forMember(
      (d) => d._ownerFirstName,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => (s.owner ? s.owner.firstName : undefined)),
    ),
    forMember(
      (d) => d._ownerLastName,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => (s.owner ? s.owner.lastName : undefined)),
    ),
  );
};

export function createPetMapper() {
  const mapper = createMapper({ strategyInitializer: classes() });
  petProfile(mapper);
  return mapper;
}
