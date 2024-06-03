import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByHabitacionArgs } from "./args/GroupByHabitacionArgs";
import { Habitacion } from "../../../models/Habitacion";
import { HabitacionGroupBy } from "../../outputs/HabitacionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Habitacion)
export class GroupByHabitacionResolver {
  @TypeGraphQL.Query(_returns => [HabitacionGroupBy], {
    nullable: false
  })
  async groupByHabitacion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByHabitacionArgs): Promise<HabitacionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).habitacion.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
