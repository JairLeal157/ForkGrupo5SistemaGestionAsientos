import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HabitacionUpdateInput } from "../../../inputs/HabitacionUpdateInput";
import { HabitacionWhereUniqueInput } from "../../../inputs/HabitacionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneHabitacionArgs {
  @TypeGraphQL.Field(_type => HabitacionUpdateInput, {
    nullable: false
  })
  data!: HabitacionUpdateInput;

  @TypeGraphQL.Field(_type => HabitacionWhereUniqueInput, {
    nullable: false
  })
  where!: HabitacionWhereUniqueInput;
}
