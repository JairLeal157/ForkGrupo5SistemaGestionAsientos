import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaWhereInput } from "../inputs/ReservaWhereInput";

@TypeGraphQL.InputType("ReservaListRelationFilter", {})
export class ReservaListRelationFilter {
  @TypeGraphQL.Field(_type => ReservaWhereInput, {
    nullable: true
  })
  every?: ReservaWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReservaWhereInput, {
    nullable: true
  })
  some?: ReservaWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReservaWhereInput, {
    nullable: true
  })
  none?: ReservaWhereInput | undefined;
}
