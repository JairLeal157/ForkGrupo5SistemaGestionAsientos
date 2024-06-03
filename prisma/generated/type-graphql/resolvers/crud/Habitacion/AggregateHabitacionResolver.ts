import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateHabitacionArgs } from "./args/AggregateHabitacionArgs";
import { Habitacion } from "../../../models/Habitacion";
import { AggregateHabitacion } from "../../outputs/AggregateHabitacion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Habitacion)
export class AggregateHabitacionResolver {
  @TypeGraphQL.Query(_returns => AggregateHabitacion, {
    nullable: false
  })
  async aggregateHabitacion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateHabitacionArgs): Promise<AggregateHabitacion> {
    return getPrismaFromContext(ctx).habitacion.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
