import { createMap, forMember, mapFrom, MappingProfile, createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import { PetFullDto } from './dto/pet-full.dto';
import { BoosterDto } from './dto/booster.dto';
import { BrendanCaneHistoryDto } from './dto/brendan-cane-history.dto';
import { OwnerBasicDto } from '../owners/dto/owner-basic.dto';

export const petFullProfile: MappingProfile = (mapper) => {
  createMap(
    mapper,
    Object,
    PetFullDto,
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
      mapFrom((s: any) => s.breed),
    ),
    forMember(
      (d) => d.birthDate,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.birthDate),
    ),
    forMember(
      (d) => d.vaccinated,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.vaccinated),
    ),
    forMember(
      (d) => d.vaccinationDate,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.vaccinationDate),
    ),
    forMember(
      (d) => d.boosters,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => s.boosters?.map((b: any) => mapper.map(b, Object, BoosterDto)) ?? []),
    ),
    forMember(
      (d) => d.brendanCane,
      mapFrom(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (s: any) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          s.brendanCane?.map((b: any) => mapper.map(b, Object, BrendanCaneHistoryDto)) ?? [],
      ),
    ),
    forMember(
      (d) => d.owner,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mapFrom((s: any) => (s.owner ? mapper.map(s.owner, Object, OwnerBasicDto) : undefined)),
    ),
  );
};

export function createPetFullMapper() {
  const mapper = createMapper({ strategyInitializer: classes() });
  petFullProfile(mapper);
  return mapper;
}
