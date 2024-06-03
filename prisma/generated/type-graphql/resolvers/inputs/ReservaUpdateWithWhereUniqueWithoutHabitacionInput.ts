import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaUpdateWithoutHabitacionInput } from "../inputs/ReservaUpdateWithoutHabitacionInput";
import { ReservaWhereUniqueInput } from "../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.InputType("ReservaUpdateWithWhereUniqueWithoutHabitacionInput", {})
export class ReservaUpdateWithWhereUniqueWithoutHabitacionInput {
  @TypeGraphQL.Field(_type => ReservaWhereUniqueInput, {
    nullable: false
  })
  where!: ReservaWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservaUpdateWithoutHabitacionInput, {
    nullable: false
  })
  data!: ReservaUpdateWithoutHabitacionInput;
}
