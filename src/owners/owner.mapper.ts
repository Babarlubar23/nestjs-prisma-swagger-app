import { createMap, forMember, mapFrom, MappingProfile, createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import { OwnerBasicDto } from './dto/owner-basic.dto';

export const ownerProfile: MappingProfile = (mapper) => {
  createMap(
    mapper,
    Object,
    OwnerBasicDto,
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
      mapFrom((s: any) => s.phone ?? undefined),
    ),
    forMember(
      (d) => d.petCount,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => (Array.isArray(s.pets) ? s.pets.length : 0)),
    ),
    forMember(
      (d) => d.petIds,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => (Array.isArray(s.pets) ? s.pets.map((p: any) => p.id) : [])),
    ),
  );
};

export function createOwnerMapper() {
  const mapper = createMapper({ strategyInitializer: classes() });
  ownerProfile(mapper);
  return mapper;
}
