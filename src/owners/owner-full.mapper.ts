import { createMap, forMember, mapFrom, MappingProfile, createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import { OwnerFullDto } from './dto/owner-full.dto';
import { PetFullDto } from '../pets/dto/pet-full.dto';
export const ownerFullProfile: MappingProfile = (mapper) => {
  createMap(
    mapper,
    Object,
    OwnerFullDto,
    forMember(
      (d) => d.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.id),
    ),
    forMember(
      (d) => d.firstName,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.firstName),
    ),
    forMember(
      (d) => d.lastName,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.lastName),
    ),
    forMember(
      (d) => d.email,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.email),
    ),
    forMember(
      (d) => d.phone,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.phone),
    ),
    forMember(
      (d) => d.address,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.address),
    ),
    forMember(
      (d) => d.pets,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.pets?.map((p: any) => mapper.map(p, Object, PetFullDto)) ?? []),
    ),
  );
};

export function createOwnerFullMapper() {
  const mapper = createMapper({ strategyInitializer: classes() });
  ownerFullProfile(mapper);
  return mapper;
}
