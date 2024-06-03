import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumEnum_RoleNameFieldUpdateOperationsInput } from "../inputs/NullableEnumEnum_RoleNameFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReservaUpdateManyWithoutUsuarioNestedInput } from "../inputs/ReservaUpdateManyWithoutUsuarioNestedInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutAccountsInput", {})
export class UserUpdateWithoutAccountsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumEnum_RoleNameFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: NullableEnumEnum_RoleNameFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ReservaUpdateManyWithoutUsuarioNestedInput, {
    nullable: true
  })
  reservas?: ReservaUpdateManyWithoutUsuarioNestedInput | undefined;
}
