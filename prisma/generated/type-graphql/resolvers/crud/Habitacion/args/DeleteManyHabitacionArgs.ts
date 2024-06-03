import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HabitacionWhereInput } from "../../../inputs/HabitacionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHabitacionArgs {
  @TypeGraphQL.Field(_type => HabitacionWhereInput, {
    nullable: true
  })
  where?: HabitacionWhereInput | undefined;
}
