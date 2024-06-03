import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ReservaListRelationFilter } from "../inputs/ReservaListRelationFilter";

@TypeGraphQL.InputType("HabitacionWhereInput", {})
export class HabitacionWhereInput {
  @TypeGraphQL.Field(_type => [HabitacionWhereInput], {
    nullable: true
  })
  AND?: HabitacionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HabitacionWhereInput], {
    nullable: true
  })
  OR?: HabitacionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HabitacionWhereInput], {
    nullable: true
  })
  NOT?: HabitacionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  numero_habitacion?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  costo_dia?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  libre?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => ReservaListRelationFilter, {
    nullable: true
  })
  reservas?: ReservaListRelationFilter | undefined;
}
