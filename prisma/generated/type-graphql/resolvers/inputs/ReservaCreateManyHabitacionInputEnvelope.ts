import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateManyHabitacionInput } from "../inputs/ReservaCreateManyHabitacionInput";

@TypeGraphQL.InputType("ReservaCreateManyHabitacionInputEnvelope", {})
export class ReservaCreateManyHabitacionInputEnvelope {
  @TypeGraphQL.Field(_type => [ReservaCreateManyHabitacionInput], {
    nullable: false
  })
  data!: ReservaCreateManyHabitacionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
