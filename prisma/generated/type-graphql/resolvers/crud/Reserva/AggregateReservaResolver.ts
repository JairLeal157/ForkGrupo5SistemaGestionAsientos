import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateReservaArgs } from "./args/AggregateReservaArgs";
import { Reserva } from "../../../models/Reserva";
import { AggregateReserva } from "../../outputs/AggregateReserva";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reserva)
export class AggregateReservaResolver {
  @TypeGraphQL.Query(_returns => AggregateReserva, {
    nullable: false
  })
  async aggregateReserva(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReservaArgs): Promise<AggregateReserva> {
    return getPrismaFromContext(ctx).reserva.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
