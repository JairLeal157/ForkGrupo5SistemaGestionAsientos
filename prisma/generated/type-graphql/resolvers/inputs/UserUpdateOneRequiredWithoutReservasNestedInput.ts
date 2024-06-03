import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReservasInput } from "../inputs/UserCreateOrConnectWithoutReservasInput";
import { UserCreateWithoutReservasInput } from "../inputs/UserCreateWithoutReservasInput";
import { UserUpdateToOneWithWhereWithoutReservasInput } from "../inputs/UserUpdateToOneWithWhereWithoutReservasInput";
import { UserUpsertWithoutReservasInput } from "../inputs/UserUpsertWithoutReservasInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReservasNestedInput", {})
export class UserUpdateOneRequiredWithoutReservasNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReservasInput, {
    nullable: true
  })
  create?: UserCreateWithoutReservasInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReservasInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReservasInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReservasInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReservasInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutReservasInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutReservasInput | undefined;
}
