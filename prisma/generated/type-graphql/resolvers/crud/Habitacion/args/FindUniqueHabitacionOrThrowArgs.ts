import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HabitacionWhereUniqueInput } from "../../../inputs/HabitacionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueHabitacionOrThrowArgs {
  @TypeGraphQL.Field(_type => HabitacionWhereUniqueInput, {
    nullable: false
  })
  where!: HabitacionWhereUniqueInput;
}
