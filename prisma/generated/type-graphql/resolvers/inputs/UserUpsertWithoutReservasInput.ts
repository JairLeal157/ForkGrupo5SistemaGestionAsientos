import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReservasInput } from "../inputs/UserCreateWithoutReservasInput";
import { UserUpdateWithoutReservasInput } from "../inputs/UserUpdateWithoutReservasInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutReservasInput", {})
export class UserUpsertWithoutReservasInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReservasInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReservasInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReservasInput, {
    nullable: false
  })
  create!: UserCreateWithoutReservasInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
