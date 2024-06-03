import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaScalarWhereInput } from "../inputs/ReservaScalarWhereInput";
import { ReservaUpdateManyMutationInput } from "../inputs/ReservaUpdateManyMutationInput";

@TypeGraphQL.InputType("ReservaUpdateManyWithWhereWithoutHabitacionInput", {})
export class ReservaUpdateManyWithWhereWithoutHabitacionInput {
  @TypeGraphQL.Field(_type => ReservaScalarWhereInput, {
    nullable: false
  })
  where!: ReservaScalarWhereInput;

  @TypeGraphQL.Field(_type => ReservaUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReservaUpdateManyMutationInput;
}
