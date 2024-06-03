import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateWithoutHabitacionInput } from "../inputs/ReservaCreateWithoutHabitacionInput";
import { ReservaWhereUniqueInput } from "../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.InputType("ReservaCreateOrConnectWithoutHabitacionInput", {})
export class ReservaCreateOrConnectWithoutHabitacionInput {
  @TypeGraphQL.Field(_type => ReservaWhereUniqueInput, {
    nullable: false
  })
  where!: ReservaWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservaCreateWithoutHabitacionInput, {
    nullable: false
  })
  create!: ReservaCreateWithoutHabitacionInput;
}
