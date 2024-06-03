import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateManyHabitacionInputEnvelope } from "../inputs/ReservaCreateManyHabitacionInputEnvelope";
import { ReservaCreateOrConnectWithoutHabitacionInput } from "../inputs/ReservaCreateOrConnectWithoutHabitacionInput";
import { ReservaCreateWithoutHabitacionInput } from "../inputs/ReservaCreateWithoutHabitacionInput";
import { ReservaWhereUniqueInput } from "../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.InputType("ReservaCreateNestedManyWithoutHabitacionInput", {})
export class ReservaCreateNestedManyWithoutHabitacionInput {
  @TypeGraphQL.Field(_type => [ReservaCreateWithoutHabitacionInput], {
    nullable: true
  })
  create?: ReservaCreateWithoutHabitacionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaCreateOrConnectWithoutHabitacionInput], {
    nullable: true
  })
  connectOrCreate?: ReservaCreateOrConnectWithoutHabitacionInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservaCreateManyHabitacionInputEnvelope, {
    nullable: true
  })
  createMany?: ReservaCreateManyHabitacionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReservaWhereUniqueInput], {
    nullable: true
  })
  connect?: ReservaWhereUniqueInput[] | undefined;
}
