import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Habitacion } from "../../../models/Habitacion";
import { Reserva } from "../../../models/Reserva";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reserva)
export class ReservaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Habitacion, {
    nullable: false
  })
  async habitacion(@TypeGraphQL.Root() reserva: Reserva, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Habitacion> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).reserva.findUniqueOrThrow({
      where: {
        id: reserva.id,
      },
    }).habitacion({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async usuario(@TypeGraphQL.Root() reserva: Reserva, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).reserva.findUniqueOrThrow({
      where: {
        id: reserva.id,
      },
    }).usuario({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
