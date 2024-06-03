import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Reserva } from "../models/Reserva";
import { HabitacionCount } from "../resolvers/outputs/HabitacionCount";

@TypeGraphQL.ObjectType("Habitacion", {})
export class Habitacion {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numero_habitacion!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  costo_dia!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  libre!: boolean;

  reservas?: Reserva[];

  @TypeGraphQL.Field(_type => HabitacionCount, {
    nullable: true
  })
  _count?: HabitacionCount | null;
}
