import * as TypeGraphQL from "type-graphql";

export enum Enum_RoleName {
  ADMIN = "ADMIN",
  USER = "USER"
}
TypeGraphQL.registerEnumType(Enum_RoleName, {
  name: "Enum_RoleName",
  description: undefined,
});
