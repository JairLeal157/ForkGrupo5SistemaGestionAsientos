import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HabitacionUpdateWithoutReservasInput } from "../inputs/HabitacionUpdateWithoutReservasInput";
import { HabitacionWhereInput } from "../inputs/HabitacionWhereInput";

@TypeGraphQL.InputType("HabitacionUpdateToOneWithWhereWithoutReservasInput", {})
export class HabitacionUpdateToOneWithWhereWithoutReservasInput {
  @TypeGraphQL.Field(_type => HabitacionWhereInput, {
    nullable: true
  })
  where?: HabitacionWhereInput | undefined;

  @TypeGraphQL.Field(_type => HabitacionUpdateWithoutReservasInput, {
    nullable: false
  })
  data!: HabitacionUpdateWithoutReservasInput;
}
