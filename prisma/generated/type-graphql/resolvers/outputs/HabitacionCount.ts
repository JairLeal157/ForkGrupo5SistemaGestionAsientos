import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HabitacionCountReservasArgs } from "./args/HabitacionCountReservasArgs";

@TypeGraphQL.ObjectType("HabitacionCount", {})
export class HabitacionCount {
  reservas!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "reservas",
    nullable: false
  })
  getReservas(@TypeGraphQL.Root() root: HabitacionCount, @TypeGraphQL.Args() args: HabitacionCountReservasArgs): number {
    return root.reservas;
  }
}
