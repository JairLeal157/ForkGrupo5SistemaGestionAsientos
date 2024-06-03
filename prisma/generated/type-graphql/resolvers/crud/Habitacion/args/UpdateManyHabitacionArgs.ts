import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HabitacionUpdateManyMutationInput } from "../../../inputs/HabitacionUpdateManyMutationInput";
import { HabitacionWhereInput } from "../../../inputs/HabitacionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHabitacionArgs {
  @TypeGraphQL.Field(_type => HabitacionUpdateManyMutationInput, {
    nullable: false
  })
  data!: HabitacionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => HabitacionWhereInput, {
    nullable: true
  })
  where?: HabitacionWhereInput | undefined;
}
