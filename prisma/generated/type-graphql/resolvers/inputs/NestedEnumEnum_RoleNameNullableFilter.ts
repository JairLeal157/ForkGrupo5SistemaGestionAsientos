import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_RoleName } from "../../enums/Enum_RoleName";

@TypeGraphQL.InputType("NestedEnumEnum_RoleNameNullableFilter", {})
export class NestedEnumEnum_RoleNameNullableFilter {
  @TypeGraphQL.Field(_type => Enum_RoleName, {
    nullable: true
  })
  equals?: "ADMIN" | "USER" | undefined;

  @TypeGraphQL.Field(_type => [Enum_RoleName], {
    nullable: true
  })
  in?: Array<"ADMIN" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => [Enum_RoleName], {
    nullable: true
  })
  notIn?: Array<"ADMIN" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_RoleNameNullableFilter | undefined;
}
