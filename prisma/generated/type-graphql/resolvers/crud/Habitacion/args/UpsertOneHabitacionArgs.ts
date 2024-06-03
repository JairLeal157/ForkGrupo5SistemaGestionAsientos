import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HabitacionCreateInput } from "../../../inputs/HabitacionCreateInput";
import { HabitacionUpdateInput } from "../../../inputs/HabitacionUpdateInput";
import { HabitacionWhereUniqueInput } from "../../../inputs/HabitacionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneHabitacionArgs {
  @TypeGraphQL.Field(_type => HabitacionWhereUniqueInput, {
    nullable: false
  })
  where!: HabitacionWhereUniqueInput;

  @TypeGraphQL.Field(_type => HabitacionCreateInput, {
    nullable: false
  })
  create!: HabitacionCreateInput;

  @TypeGraphQL.Field(_type => HabitacionUpdateInput, {
    nullable: false
  })
  update!: HabitacionUpdateInput;
}
