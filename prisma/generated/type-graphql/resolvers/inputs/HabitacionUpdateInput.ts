import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ReservaUpdateManyWithoutHabitacionNestedInput } from "../inputs/ReservaUpdateManyWithoutHabitacionNestedInput";

@TypeGraphQL.InputType("HabitacionUpdateInput", {})
export class HabitacionUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  numero_habitacion?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  costo_dia?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  libre?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ReservaUpdateManyWithoutHabitacionNestedInput, {
    nullable: true
  })
  reservas?: ReservaUpdateManyWithoutHabitacionNestedInput | undefined;
}
