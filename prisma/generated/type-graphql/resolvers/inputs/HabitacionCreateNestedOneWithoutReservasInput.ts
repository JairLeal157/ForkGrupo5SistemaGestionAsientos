import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HabitacionCreateOrConnectWithoutReservasInput } from "../inputs/HabitacionCreateOrConnectWithoutReservasInput";
import { HabitacionCreateWithoutReservasInput } from "../inputs/HabitacionCreateWithoutReservasInput";
import { HabitacionWhereUniqueInput } from "../inputs/HabitacionWhereUniqueInput";

@TypeGraphQL.InputType("HabitacionCreateNestedOneWithoutReservasInput", {})
export class HabitacionCreateNestedOneWithoutReservasInput {
  @TypeGraphQL.Field(_type => HabitacionCreateWithoutReservasInput, {
    nullable: true
  })
  create?: HabitacionCreateWithoutReservasInput | undefined;

  @TypeGraphQL.Field(_type => HabitacionCreateOrConnectWithoutReservasInput, {
    nullable: true
  })
  connectOrCreate?: HabitacionCreateOrConnectWithoutReservasInput | undefined;

  @TypeGraphQL.Field(_type => HabitacionWhereUniqueInput, {
    nullable: true
  })
  connect?: HabitacionWhereUniqueInput | undefined;
}
