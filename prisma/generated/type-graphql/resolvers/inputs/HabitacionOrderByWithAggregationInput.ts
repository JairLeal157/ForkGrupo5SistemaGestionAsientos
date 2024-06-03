import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HabitacionAvgOrderByAggregateInput } from "../inputs/HabitacionAvgOrderByAggregateInput";
import { HabitacionCountOrderByAggregateInput } from "../inputs/HabitacionCountOrderByAggregateInput";
import { HabitacionMaxOrderByAggregateInput } from "../inputs/HabitacionMaxOrderByAggregateInput";
import { HabitacionMinOrderByAggregateInput } from "../inputs/HabitacionMinOrderByAggregateInput";
import { HabitacionSumOrderByAggregateInput } from "../inputs/HabitacionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("HabitacionOrderByWithAggregationInput", {})
export class HabitacionOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => HabitacionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: HabitacionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HabitacionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: HabitacionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HabitacionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: HabitacionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HabitacionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: HabitacionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HabitacionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: HabitacionSumOrderByAggregateInput | undefined;
}
