import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstReservaOrThrowArgs } from "./args/FindFirstReservaOrThrowArgs";
import { Reserva } from "../../../models/Reserva";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reserva)
export class FindFirstReservaOrThrowResolver {
  @TypeGraphQL.Query(_returns => Reserva, {
    nullable: true
  })
  async findFirstReservaOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstReservaOrThrowArgs): Promise<Reserva | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).reserva.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
