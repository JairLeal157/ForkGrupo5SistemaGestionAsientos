import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateWithoutUsuarioInput } from "../inputs/ReservaCreateWithoutUsuarioInput";
import { ReservaUpdateWithoutUsuarioInput } from "../inputs/ReservaUpdateWithoutUsuarioInput";
import { ReservaWhereUniqueInput } from "../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.InputType("ReservaUpsertWithWhereUniqueWithoutUsuarioInput", {})
export class ReservaUpsertWithWhereUniqueWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => ReservaWhereUniqueInput, {
    nullable: false
  })
  where!: ReservaWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservaUpdateWithoutUsuarioInput, {
    nullable: false
  })
  update!: ReservaUpdateWithoutUsuarioInput;

  @TypeGraphQL.Field(_type => ReservaCreateWithoutUsuarioInput, {
    nullable: false
  })
  create!: ReservaCreateWithoutUsuarioInput;
}
