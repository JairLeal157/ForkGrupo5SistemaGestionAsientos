import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEstadoReservaFilter } from "../inputs/EnumEstadoReservaFilter";
import { HabitacionRelationFilter } from "../inputs/HabitacionRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReservaWhereInput", {})
export class ReservaWhereInput {
  @TypeGraphQL.Field(_type => [ReservaWhereInput], {
    nullable: true
  })
  AND?: ReservaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaWhereInput], {
    nullable: true
  })
  OR?: ReservaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaWhereInput], {
    nullable: true
  })
  NOT?: ReservaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  numero_habitacion?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  usuarioId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEstadoReservaFilter, {
    nullable: true
  })
  estado?: EnumEstadoReservaFilter | undefined;

  @TypeGraphQL.Field(_type => HabitacionRelationFilter, {
    nullable: true
  })
  habitacion?: HabitacionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  usuario?: UserRelationFilter | undefined;
}
