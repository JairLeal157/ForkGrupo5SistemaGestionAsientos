import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReservasInput } from "../inputs/UserCreateOrConnectWithoutReservasInput";
import { UserCreateWithoutReservasInput } from "../inputs/UserCreateWithoutReservasInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutReservasInput", {})
export class UserCreateNestedOneWithoutReservasInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReservasInput, {
    nullable: true
  })
  create?: UserCreateWithoutReservasInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReservasInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReservasInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
