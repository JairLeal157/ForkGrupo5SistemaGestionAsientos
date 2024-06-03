import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EstadoReserva } from "../../enums/EstadoReserva";

@TypeGraphQL.InputType("ReservaCreateManyHabitacionInput", {})
export class ReservaCreateManyHabitacionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioId!: string;

  @TypeGraphQL.Field(_type => EstadoReserva, {
    nullable: false
  })
  estado!: "reservado" | "checkin" | "checkout";
}
