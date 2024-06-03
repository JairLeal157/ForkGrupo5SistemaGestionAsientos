import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("HabitacionScalarWhereWithAggregatesInput", {})
export class HabitacionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [HabitacionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: HabitacionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HabitacionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: HabitacionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HabitacionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: HabitacionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  numero_habitacion?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  costo_dia?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  libre?: BoolWithAggregatesFilter | undefined;
}
