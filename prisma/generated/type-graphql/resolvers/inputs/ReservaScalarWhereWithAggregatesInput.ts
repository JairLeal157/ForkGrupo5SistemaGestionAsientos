import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEstadoReservaWithAggregatesFilter } from "../inputs/EnumEstadoReservaWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReservaScalarWhereWithAggregatesInput", {})
export class ReservaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReservaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReservaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReservaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReservaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  numero_habitacion?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  usuarioId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEstadoReservaWithAggregatesFilter, {
    nullable: true
  })
  estado?: EnumEstadoReservaWithAggregatesFilter | undefined;
}
