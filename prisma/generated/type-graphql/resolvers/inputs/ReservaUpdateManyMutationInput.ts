import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEstadoReservaFieldUpdateOperationsInput } from "../inputs/EnumEstadoReservaFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ReservaUpdateManyMutationInput", {})
export class ReservaUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEstadoReservaFieldUpdateOperationsInput, {
    nullable: true
  })
  estado?: EnumEstadoReservaFieldUpdateOperationsInput | undefined;
}
