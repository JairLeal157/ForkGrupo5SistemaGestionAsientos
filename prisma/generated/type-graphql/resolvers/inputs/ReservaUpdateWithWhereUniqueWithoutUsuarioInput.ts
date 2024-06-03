import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaUpdateWithoutUsuarioInput } from "../inputs/ReservaUpdateWithoutUsuarioInput";
import { ReservaWhereUniqueInput } from "../inputs/ReservaWhereUniqueInput";

@TypeGraphQL.InputType("ReservaUpdateWithWhereUniqueWithoutUsuarioInput", {})
export class ReservaUpdateWithWhereUniqueWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => ReservaWhereUniqueInput, {
    nullable: false
  })
  where!: ReservaWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReservaUpdateWithoutUsuarioInput, {
    nullable: false
  })
  data!: ReservaUpdateWithoutUsuarioInput;
}
