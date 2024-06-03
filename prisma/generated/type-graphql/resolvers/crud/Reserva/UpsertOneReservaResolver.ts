import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneReservaArgs } from "./args/UpsertOneReservaArgs";
import { Reserva } from "../../../models/Reserva";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reserva)
export class UpsertOneReservaResolver {
  @TypeGraphQL.Mutation(_returns => Reserva, {
    nullable: false
  })
  async upsertOneReserva(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneReservaArgs): Promise<Reserva> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).reserva.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
