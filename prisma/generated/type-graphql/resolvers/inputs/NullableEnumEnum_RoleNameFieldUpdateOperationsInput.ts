import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_RoleName } from "../../enums/Enum_RoleName";

@TypeGraphQL.InputType("NullableEnumEnum_RoleNameFieldUpdateOperationsInput", {})
export class NullableEnumEnum_RoleNameFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Enum_RoleName, {
    nullable: true
  })
  set?: "ADMIN" | "USER" | undefined;
}
