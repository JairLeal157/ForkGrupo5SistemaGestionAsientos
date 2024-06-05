import { arg, extendType, nonNull, stringArg } from 'nexus';

export const QueriesReserva = extendType({
  type: 'Query',
  definition(t) {
    // Busca una reserva por su id
    t.field('reserva', {
      type: 'Reserva',
      args: {
        reservaId: nonNull(stringArg())
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.reserva.findUnique({
          where: {
            id: args.reservaId
          }
        })
      }
    });

    // Busca todas las reservas
    t.list.field('reservas', {
      type: 'Reserva',
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.reserva.findMany()
      }
    });

    // Busca reservas por estado
    t.list.field('reservasPorEstado', {
      type: 'Reserva',
      args: {
        estado: nonNull(arg({ type: 'EstadoReserva' }))
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.reserva.findMany({
          where: {
            estado: args.estado
          }
        })
      }
    });
  }
});