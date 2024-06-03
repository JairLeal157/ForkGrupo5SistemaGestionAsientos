import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEstadoReservaFilter } from "../inputs/NestedEnumEstadoReservaFilter";
import { EstadoReserva } from "../../enums/EstadoReserva";

@TypeGraphQL.InputType("EnumEstadoReservaFilter", {})
export class EnumEstadoReservaFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEstadoReservaFilter, {
    nullable: true
  })
  not?: NestedEnumEstadoReservaFilter | undefined;
}
