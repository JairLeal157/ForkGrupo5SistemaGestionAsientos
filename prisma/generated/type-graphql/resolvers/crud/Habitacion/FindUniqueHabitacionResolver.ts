import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueHabitacionArgs } from "./args/FindUniqueHabitacionArgs";
import { Habitacion } from "../../../models/Habitacion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Habitacion)
export class FindUniqueHabitacionResolver {
  @TypeGraphQL.Query(_returns => Habitacion, {
    nullable: true
  })
  async habitacion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueHabitacionArgs): Promise<Habitacion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).habitacion.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
