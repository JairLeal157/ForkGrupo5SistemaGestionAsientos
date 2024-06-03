import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReservaAvgAggregate } from "../outputs/ReservaAvgAggregate";
import { ReservaCountAggregate } from "../outputs/ReservaCountAggregate";
import { ReservaMaxAggregate } from "../outputs/ReservaMaxAggregate";
import { ReservaMinAggregate } from "../outputs/ReservaMinAggregate";
import { ReservaSumAggregate } from "../outputs/ReservaSumAggregate";

@TypeGraphQL.ObjectType("AggregateReserva", {})
export class AggregateReserva {
  @TypeGraphQL.Field(_type => ReservaCountAggregate, {
    nullable: true
  })
  _count!: ReservaCountAggregate | null;

  @TypeGraphQL.Field(_type => ReservaAvgAggregate, {
    nullable: true
  })
  _avg!: ReservaAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReservaSumAggregate, {
    nullable: true
  })
  _sum!: ReservaSumAggregate | null;

  @TypeGraphQL.Field(_type => ReservaMinAggregate, {
    nullable: true
  })
  _min!: ReservaMinAggregate | null;

  @TypeGraphQL.Field(_type => ReservaMaxAggregate, {
    nullable: true
  })
  _max!: ReservaMaxAggregate | null;
}
