import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HabitacionCreateNestedOneWithoutReservasInput } from "../inputs/HabitacionCreateNestedOneWithoutReservasInput";
import { EstadoReserva } from "../../enums/EstadoReserva";

@TypeGraphQL.InputType("ReservaCreateWithoutUsuarioInput", {})
export class ReservaCreateWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => EstadoReserva, {
    nullable: false
  })
  estado!: "reservado" | "checkin" | "checkout";

  @TypeGraphQL.Field(_type => HabitacionCreateNestedOneWithoutReservasInput, {
    nullable: false
  })
  habitacion!: HabitacionCreateNestedOneWithoutReservasInput;
}
