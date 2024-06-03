import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_RoleNameNullableFilter } from "../inputs/NestedEnumEnum_RoleNameNullableFilter";
import { NestedEnumEnum_RoleNameNullableWithAggregatesFilter } from "../inputs/NestedEnumEnum_RoleNameNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { Enum_RoleName } from "../../enums/Enum_RoleName";

@TypeGraphQL.InputType("EnumEnum_RoleNameNullableWithAggregatesFilter", {})
export class EnumEnum_RoleNameNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_RoleNameNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumEnum_RoleNameNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_RoleNameNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumEnum_RoleNameNullableFilter | undefined;
}
