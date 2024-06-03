import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaOrderByRelationAggregateInput } from "../inputs/ReservaOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("HabitacionOrderByWithRelationInput", {})
export class HabitacionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  numero_habitacion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  costo_dia?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  libre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReservaOrderByRelationAggregateInput, {
    nullable: true
  })
  reservas?: ReservaOrderByRelationAggregateInput | undefined;
}
