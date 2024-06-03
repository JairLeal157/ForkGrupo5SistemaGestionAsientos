import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Habitacion } from "../../../models/Habitacion";
import { Reserva } from "../../../models/Reserva";
import { HabitacionReservasArgs } from "./args/HabitacionReservasArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Habitacion)
export class HabitacionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Reserva], {
    nullable: false
  })
  async reservas(@TypeGraphQL.Root() habitacion: Habitacion, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: HabitacionReservasArgs): Promise<Reserva[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).habitacion.findUniqueOrThrow({
      where: {
        numero_habitacion: habitacion.numero_habitacion,
      },
    }).reservas({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
