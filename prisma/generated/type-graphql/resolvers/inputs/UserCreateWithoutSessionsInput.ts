import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { ReservaCreateNestedManyWithoutUsuarioInput } from "../inputs/ReservaCreateNestedManyWithoutUsuarioInput";
import { Enum_RoleName } from "../../enums/Enum_RoleName";

@TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {})
export class UserCreateWithoutSessionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => Enum_RoleName, {
    nullable: true
  })
  role?: "ADMIN" | "USER" | undefined;

  @TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReservaCreateNestedManyWithoutUsuarioInput, {
    nullable: true
  })
  reservas?: ReservaCreateNestedManyWithoutUsuarioInput | undefined;
}
