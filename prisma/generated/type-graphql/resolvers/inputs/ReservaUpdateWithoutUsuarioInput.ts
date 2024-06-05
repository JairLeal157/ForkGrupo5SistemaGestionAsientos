import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEstadoReservaFieldUpdateOperationsInput } from "../inputs/EnumEstadoReservaFieldUpdateOperationsInput";
import { HabitacionUpdateOneRequiredWithoutReservasNestedInput } from "../inputs/HabitacionUpdateOneRequiredWithoutReservasNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ReservaUpdateWithoutUsuarioInput", {})
export class ReservaUpdateWithoutUsuarioInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEstadoReservaFieldUpdateOperationsInput, {
    nullable: true
  })
  estado?: EnumEstadoReservaFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => HabitacionUpdateOneRequiredWithoutReservasNestedInput, {
    nullable: true
  })
  habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput | undefined;
}