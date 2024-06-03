import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEstadoReservaFieldUpdateOperationsInput } from "../inputs/EnumEstadoReservaFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReservasNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReservasNestedInput";

@TypeGraphQL.InputType("ReservaUpdateWithoutHabitacionInput", {})
export class ReservaUpdateWithoutHabitacionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEstadoReservaFieldUpdateOperationsInput, {
    nullable: true
  })
  estado?: EnumEstadoReservaFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReservasNestedInput, {
    nullable: true
  })
  usuario?: UserUpdateOneRequiredWithoutReservasNestedInput | undefined;
}
