import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HabitacionCreateWithoutReservasInput } from "../inputs/HabitacionCreateWithoutReservasInput";
import { HabitacionUpdateWithoutReservasInput } from "../inputs/HabitacionUpdateWithoutReservasInput";
import { HabitacionWhereInput } from "../inputs/HabitacionWhereInput";

@TypeGraphQL.InputType("HabitacionUpsertWithoutReservasInput", {})
export class HabitacionUpsertWithoutReservasInput {
  @TypeGraphQL.Field(_type => HabitacionUpdateWithoutReservasInput, {
    nullable: false
  })
  update!: HabitacionUpdateWithoutReservasInput;

  @TypeGraphQL.Field(_type => HabitacionCreateWithoutReservasInput, {
    nullable: false
  })
  create!: HabitacionCreateWithoutReservasInput;

  @TypeGraphQL.Field(_type => HabitacionWhereInput, {
    nullable: true
  })
  where?: HabitacionWhereInput | undefined;
}
