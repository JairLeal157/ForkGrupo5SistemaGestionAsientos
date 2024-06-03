import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueHabitacionOrThrowArgs } from "./args/FindUniqueHabitacionOrThrowArgs";
import { Habitacion } from "../../../models/Habitacion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Habitacion)
export class FindUniqueHabitacionOrThrowResolver {
  @TypeGraphQL.Query(_returns => Habitacion, {
    nullable: true
  })
  async getHabitacion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueHabitacionOrThrowArgs): Promise<Habitacion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).habitacion.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
