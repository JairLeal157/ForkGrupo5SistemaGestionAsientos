import { extendType, intArg, nonNull, stringArg } from 'nexus';

export const MutationReserva = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createReserva', {
      type: 'Reserva',
      args: {
        usuarioId: nonNull(stringArg()),
        numeroHabitacion: nonNull(intArg())
      },
      async resolve(_parent, args, ctx) {
        const nuevaReserva = await ctx.prisma.reserva.create({
          data: {
            usuarioId: args.usuarioId,
            numero_habitacion: args.numeroHabitacion,
            estado: 'reservado'
          }
        });
        await ctx.prisma.habitacion.update({
          where: { numero_habitacion: args.numeroHabitacion },
          data: { libre: false }
        });
        return nuevaReserva;
      }
    });

    t.field('checkinReserva', {
      type: 'Reserva',
      args: {
        reservaId: nonNull(stringArg())
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.reserva.update({
          where: { id: args.reservaId },
          data: { estado: 'checkin' }
        });
      }
    });

    t.field('checkoutReserva', {
      type: 'Reserva',
      args: {
        reservaId: nonNull(stringArg())
      },
      async resolve(_parent, args, ctx) {
        const reserva = await ctx.prisma.reserva.update({
          where: { id: args.reservaId },
          data: { estado: 'checkout' }
        });
        await ctx.prisma.habitacion.update({
          where: { numero_habitacion: reserva.numero_habitacion },
          data: { libre: true }
        });
        return reserva;
      }
    });
  }
});
