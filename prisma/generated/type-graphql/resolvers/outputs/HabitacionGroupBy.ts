import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HabitacionAvgAggregate } from "../outputs/HabitacionAvgAggregate";
import { HabitacionCountAggregate } from "../outputs/HabitacionCountAggregate";
import { HabitacionMaxAggregate } from "../outputs/HabitacionMaxAggregate";
import { HabitacionMinAggregate } from "../outputs/HabitacionMinAggregate";
import { HabitacionSumAggregate } from "../outputs/HabitacionSumAggregate";

@TypeGraphQL.ObjectType("HabitacionGroupBy", {})
export class HabitacionGroupBy {
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

  @TypeGraphQL.Field(_type => HabitacionCountAggregate, {
    nullable: true
  })
  _count!: HabitacionCountAggregate | null;

  @TypeGraphQL.Field(_type => HabitacionAvgAggregate, {
    nullable: true
  })
  _avg!: HabitacionAvgAggregate | null;

  @TypeGraphQL.Field(_type => HabitacionSumAggregate, {
    nullable: true
  })
  _sum!: HabitacionSumAggregate | null;

  @TypeGraphQL.Field(_type => HabitacionMinAggregate, {
    nullable: true
  })
  _min!: HabitacionMinAggregate | null;

  @TypeGraphQL.Field(_type => HabitacionMaxAggregate, {
    nullable: true
  })
  _max!: HabitacionMaxAggregate | null;
}
