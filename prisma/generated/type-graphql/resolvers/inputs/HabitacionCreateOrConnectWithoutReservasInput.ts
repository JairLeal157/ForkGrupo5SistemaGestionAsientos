import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HabitacionCreateWithoutReservasInput } from "../inputs/HabitacionCreateWithoutReservasInput";
import { HabitacionWhereUniqueInput } from "../inputs/HabitacionWhereUniqueInput";

@TypeGraphQL.InputType("HabitacionCreateOrConnectWithoutReservasInput", {})
export class HabitacionCreateOrConnectWithoutReservasInput {
  @TypeGraphQL.Field(_type => HabitacionWhereUniqueInput, {
    nullable: false
  })
  where!: HabitacionWhereUniqueInput;

  @TypeGraphQL.Field(_type => HabitacionCreateWithoutReservasInput, {
    nullable: false
  })
  create!: HabitacionCreateWithoutReservasInput;
}
