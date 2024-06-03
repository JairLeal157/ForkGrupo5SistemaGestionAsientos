import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HabitacionOrderByWithAggregationInput } from "../../../inputs/HabitacionOrderByWithAggregationInput";
import { HabitacionScalarWhereWithAggregatesInput } from "../../../inputs/HabitacionScalarWhereWithAggregatesInput";
import { HabitacionWhereInput } from "../../../inputs/HabitacionWhereInput";
import { HabitacionScalarFieldEnum } from "../../../../enums/HabitacionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByHabitacionArgs {
  @TypeGraphQL.Field(_type => HabitacionWhereInput, {
    nullable: true
  })
  where?: HabitacionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HabitacionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: HabitacionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [HabitacionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"numero_habitacion" | "costo_dia" | "libre">;

  @TypeGraphQL.Field(_type => HabitacionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: HabitacionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
