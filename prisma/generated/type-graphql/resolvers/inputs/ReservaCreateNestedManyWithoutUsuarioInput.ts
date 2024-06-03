import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateManyUsuarioInputEnvelope } from "../inputs/ReservaCreateManyUsuarioInputEnvelope";
import { ReservaCreateOrConnectWithoutUsuarioInput } from "../inputs/ReservaCreateOrConnectWithoutUsuarioInput";
import { ReservaCreateWithoutUsuarioInput } from "../inputs/ReservaCreateWithoutUsuarioInput";
import { ReservaWhereUniqueInput } from "../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.InputType("ReservaCreateNestedManyWithoutUsuarioInput", {})
export class ReservaCreateNestedManyWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => [ReservaCreateWithoutUsuarioInput], {
    nullable: true
  })
  create?: ReservaCreateWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaCreateOrConnectWithoutUsuarioInput], {
    nullable: true
  })
  connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput[] | undefined;

  @TypeGraphQL.Field(_type => ReservaCreateManyUsuarioInputEnvelope, {
    nullable: true
  })
  createMany?: ReservaCreateManyUsuarioInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReservaWhereUniqueInput], {
    nullable: true
  })
  connect?: ReservaWhereUniqueInput[] | undefined;
}
