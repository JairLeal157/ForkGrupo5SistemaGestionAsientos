import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutReservasInput } from "../inputs/UserCreateNestedOneWithoutReservasInput";
import { EstadoReserva } from "../../enums/EstadoReserva";

@TypeGraphQL.InputType("ReservaCreateWithoutHabitacionInput", {})
export class ReservaCreateWithoutHabitacionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => EstadoReserva, {
    nullable: false
  })
  estado!: "reservado" | "checkin" | "checkout";

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReservasInput, {
    nullable: false
  })
  usuario!: UserCreateNestedOneWithoutReservasInput;
}
