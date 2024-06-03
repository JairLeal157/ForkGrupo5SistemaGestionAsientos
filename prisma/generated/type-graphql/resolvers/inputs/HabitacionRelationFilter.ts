import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HabitacionWhereInput } from "../inputs/HabitacionWhereInput";

@TypeGraphQL.InputType("HabitacionRelationFilter", {})
export class HabitacionRelationFilter {
  @TypeGraphQL.Field(_type => HabitacionWhereInput, {
    nullable: true
  })
  is?: HabitacionWhereInput | undefined;

  @TypeGraphQL.Field(_type => HabitacionWhereInput, {
    nullable: true
  })
  isNot?: HabitacionWhereInput | undefined;
}
