import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaAvgOrderByAggregateInput } from "../inputs/ReservaAvgOrderByAggregateInput";
import { ReservaCountOrderByAggregateInput } from "../inputs/ReservaCountOrderByAggregateInput";
import { ReservaMaxOrderByAggregateInput } from "../inputs/ReservaMaxOrderByAggregateInput";
import { ReservaMinOrderByAggregateInput } from "../inputs/ReservaMinOrderByAggregateInput";
import { ReservaSumOrderByAggregateInput } from "../inputs/ReservaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReservaOrderByWithAggregationInput", {})
export class ReservaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  numero_habitacion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usuarioId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  estado?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReservaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReservaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReservaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ReservaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReservaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReservaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReservaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReservaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReservaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ReservaSumOrderByAggregateInput | undefined;
}
