import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateManyUsuarioInputEnvelope } from "../inputs/ReservaCreateManyUsuarioInputEnvelope";
import { ReservaCreateOrConnectWithoutUsuarioInput } from "../inputs/ReservaCreateOrConnectWithoutUsuarioInput";
import { ReservaCreateWithoutUsuarioInput } from "../inputs/ReservaCreateWithoutUsuarioInput";
import { ReservaScalarWhereInput } from "../inputs/ReservaScalarWhereInput";
import { ReservaUpdateManyWithWhereWithoutUsuarioInput } from "../inputs/ReservaUpdateManyWithWhereWithoutUsuarioInput";
import { ReservaUpdateWithWhereUniqueWithoutUsuarioInput } from "../inputs/ReservaUpdateWithWhereUniqueWithoutUsuarioInput";
import { ReservaUpsertWithWhereUniqueWithoutUsuarioInput } from "../inputs/ReservaUpsertWithWhereUniqueWithoutUsuarioInput";
import { ReservaWhereUniqueInput } from "../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.InputType("ReservaUpdateManyWithoutUsuarioNestedInput", {})
export class ReservaUpdateManyWithoutUsuarioNestedInput {
  @TypeGraphQL.Field(_type => [ReservaCreateWithoutUsuarioInput], {
    nullable: true
  })
  create?: ReservaCreateWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaCreateOrConnectWithoutUsuarioInput], {
    nullable: true
  })
  connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaUpsertWithWhereUniqueWithoutUsuarioInput], {
    nullable: true
  })
  upsert?: ReservaUpsertWithWhereUniqueWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservaCreateManyUsuarioInputEnvelope, {
    nullable: true
  })
  createMany?: ReservaCreateManyUsuarioInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReservaUpdateWithWhereUniqueWithoutUsuarioInput], {
    nullable: true
  })
  update?: ReservaUpdateWithWhereUniqueWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaUpdateManyWithWhereWithoutUsuarioInput], {
    nullable: true
  })
  updateMany?: ReservaUpdateManyWithWhereWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReservaScalarWhereInput[] | undefined;
}
