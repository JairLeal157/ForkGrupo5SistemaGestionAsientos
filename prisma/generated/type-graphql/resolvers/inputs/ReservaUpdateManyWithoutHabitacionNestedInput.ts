import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateManyHabitacionInputEnvelope } from "../inputs/ReservaCreateManyHabitacionInputEnvelope";
import { ReservaCreateOrConnectWithoutHabitacionInput } from "../inputs/ReservaCreateOrConnectWithoutHabitacionInput";
import { ReservaCreateWithoutHabitacionInput } from "../inputs/ReservaCreateWithoutHabitacionInput";
import { ReservaScalarWhereInput } from "../inputs/ReservaScalarWhereInput";
import { ReservaUpdateManyWithWhereWithoutHabitacionInput } from "../inputs/ReservaUpdateManyWithWhereWithoutHabitacionInput";
import { ReservaUpdateWithWhereUniqueWithoutHabitacionInput } from "../inputs/ReservaUpdateWithWhereUniqueWithoutHabitacionInput";
import { ReservaUpsertWithWhereUniqueWithoutHabitacionInput } from "../inputs/ReservaUpsertWithWhereUniqueWithoutHabitacionInput";
import { ReservaWhereUniqueInput } from "../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.InputType("ReservaUpdateManyWithoutHabitacionNestedInput", {})
export class ReservaUpdateManyWithoutHabitacionNestedInput {
  @TypeGraphQL.Field(_type => [ReservaCreateWithoutHabitacionInput], {
    nullable: true
  })
  create?: ReservaCreateWithoutHabitacionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaCreateOrConnectWithoutHabitacionInput], {
    nullable: true
  })
  connectOrCreate?: ReservaCreateOrConnectWithoutHabitacionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaUpsertWithWhereUniqueWithoutHabitacionInput], {
    nullable: true
  })
  upsert?: ReservaUpsertWithWhereUniqueWithoutHabitacionInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservaCreateManyHabitacionInputEnvelope, {
    nullable: true
  })
  createMany?: ReservaCreateManyHabitacionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReservaWhereUniqueInput], {
    nullable: true
  })
  set?: ReservaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReservaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaWhereUniqueInput], {
    nullable: true
  })
  delete?: ReservaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaWhereUniqueInput], {
    nullable: true
  })
  connect?: ReservaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaUpdateWithWhereUniqueWithoutHabitacionInput], {
    nullable: true
  })
  update?: ReservaUpdateWithWhereUniqueWithoutHabitacionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaUpdateManyWithWhereWithoutHabitacionInput], {
    nullable: true
  })
  updateMany?: ReservaUpdateManyWithWhereWithoutHabitacionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReservaScalarWhereInput[] | undefined;
}
