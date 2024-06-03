import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReservaOrderByWithAggregationInput } from "../../../inputs/ReservaOrderByWithAggregationInput";
import { ReservaScalarWhereWithAggregatesInput } from "../../../inputs/ReservaScalarWhereWithAggregatesInput";
import { ReservaWhereInput } from "../../../inputs/ReservaWhereInput";
import { ReservaScalarFieldEnum } from "../../../../enums/ReservaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReservaArgs {
  @TypeGraphQL.Field(_type => ReservaWhereInput, {
    nullable: true
  })
  where?: ReservaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReservaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReservaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReservaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "numero_habitacion" | "usuarioId" | "estado">;

  @TypeGraphQL.Field(_type => ReservaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReservaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
