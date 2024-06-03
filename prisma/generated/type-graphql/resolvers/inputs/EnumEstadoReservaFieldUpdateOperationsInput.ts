import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoReserva } from "../../enums/EstadoReserva";

@TypeGraphQL.InputType("EnumEstadoReservaFieldUpdateOperationsInput", {})
export class EnumEstadoReservaFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => EstadoReserva, {
    nullable: true
  })
  set?: "reservado" | "checkin" | "checkout" | undefined;
}
