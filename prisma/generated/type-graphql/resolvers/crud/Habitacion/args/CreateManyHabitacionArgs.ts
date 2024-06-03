import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HabitacionCreateManyInput } from "../../../inputs/HabitacionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyHabitacionArgs {
  @TypeGraphQL.Field(_type => [HabitacionCreateManyInput], {
    nullable: false
  })
  data!: HabitacionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
