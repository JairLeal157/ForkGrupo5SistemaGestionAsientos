import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEstadoReservaFilter } from "../inputs/EnumEstadoReservaFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReservaScalarWhereInput", {})
export class ReservaScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReservaScalarWhereInput], {
    nullable: true
  })
  AND?: ReservaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaScalarWhereInput], {
    nullable: true
  })
  OR?: ReservaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaScalarWhereInput], {
    nullable: true
  })
  NOT?: ReservaScalarWhereInput[] | undefined;

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
}
