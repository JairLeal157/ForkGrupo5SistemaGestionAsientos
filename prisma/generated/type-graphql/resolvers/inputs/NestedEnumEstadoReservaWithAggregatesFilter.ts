import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEstadoReservaFilter } from "../inputs/NestedEnumEstadoReservaFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { EstadoReserva } from "../../enums/EstadoReserva";

@TypeGraphQL.InputType("NestedEnumEstadoReservaWithAggregatesFilter", {})
export class NestedEnumEstadoReservaWithAggregatesFilter {
  @TypeGraphQL.Field(_type => EstadoReserva, {
    nullable: true
  })
  equals?: "reservado" | "checkin" | "checkout" | undefined;

  @TypeGraphQL.Field(_type => [EstadoReserva], {
    nullable: true
  })
  in?: Array<"reservado" | "checkin" | "checkout"> | undefined;

  @TypeGraphQL.Field(_type => [EstadoReserva], {
    nullable: true
  })
  notIn?: Array<"reservado" | "checkin" | "checkout"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEstadoReservaWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEstadoReservaWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEstadoReservaFilter, {
    nullable: true
  })
  _min?: NestedEnumEstadoReservaFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEstadoReservaFilter, {
    nullable: true
  })
  _max?: NestedEnumEstadoReservaFilter | undefined;
}
