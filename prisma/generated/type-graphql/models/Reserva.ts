import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Habitacion } from "../models/Habitacion";
import { User } from "../models/User";
import { EstadoReserva } from "../enums/EstadoReserva";

@TypeGraphQL.ObjectType("Reserva", {})
export class Reserva {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  habitacion?: Habitacion;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numero_habitacion!: number;

  usuario?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioId!: string;

  @TypeGraphQL.Field(_type => EstadoReserva, {
    nullable: false
  })
  estado!: "reservado" | "checkin" | "checkout";
}
