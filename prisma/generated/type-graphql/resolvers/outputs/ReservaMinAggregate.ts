import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoReserva } from "../../enums/EstadoReserva";

@TypeGraphQL.ObjectType("ReservaMinAggregate", {})
export class ReservaMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numero_habitacion!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  usuarioId!: string | null;

  @TypeGraphQL.Field(_type => EstadoReserva, {
    nullable: true
  })
  estado!: "reservado" | "checkin" | "checkout" | null;
}
