import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateWithoutHabitacionInput } from "../inputs/ReservaCreateWithoutHabitacionInput";
import { ReservaUpdateWithoutHabitacionInput } from "../inputs/ReservaUpdateWithoutHabitacionInput";
import { ReservaWhereUniqueInput } from "../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.InputType("ReservaUpsertWithWhereUniqueWithoutHabitacionInput", {})
export class ReservaUpsertWithWhereUniqueWithoutHabitacionInput {
  @TypeGraphQL.Field(_type => ReservaWhereUniqueInput, {
    nullable: false
  })
  where!: ReservaWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservaUpdateWithoutHabitacionInput, {
    nullable: false
  })
  update!: ReservaUpdateWithoutHabitacionInput;

  @TypeGraphQL.Field(_type => ReservaCreateWithoutHabitacionInput, {
    nullable: false
  })
  create!: ReservaCreateWithoutHabitacionInput;
}
