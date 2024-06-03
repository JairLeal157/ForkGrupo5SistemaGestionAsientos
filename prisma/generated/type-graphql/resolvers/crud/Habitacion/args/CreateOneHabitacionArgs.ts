import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HabitacionCreateInput } from "../../../inputs/HabitacionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneHabitacionArgs {
  @TypeGraphQL.Field(_type => HabitacionCreateInput, {
    nullable: false
  })
  data!: HabitacionCreateInput;
}
