import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaCreateNestedManyWithoutHabitacionInput } from "../inputs/ReservaCreateNestedManyWithoutHabitacionInput";

@TypeGraphQL.InputType("HabitacionCreateInput", {})
export class HabitacionCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numero_habitacion!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  costo_dia!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  libre!: boolean;

  @TypeGraphQL.Field(_type => ReservaCreateNestedManyWithoutHabitacionInput, {
    nullable: true
  })
  reservas?: ReservaCreateNestedManyWithoutHabitacionInput | undefined;
}
