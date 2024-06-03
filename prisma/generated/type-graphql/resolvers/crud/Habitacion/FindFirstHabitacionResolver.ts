import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstHabitacionArgs } from "./args/FindFirstHabitacionArgs";
import { Habitacion } from "../../../models/Habitacion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Habitacion)
export class FindFirstHabitacionResolver {
  @TypeGraphQL.Query(_returns => Habitacion, {
    nullable: true
  })
  async findFirstHabitacion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstHabitacionArgs): Promise<Habitacion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).habitacion.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
