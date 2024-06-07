import { booleanArg, extendType, intArg, nonNull } from 'nexus';

export const QueriesHabitacion = extendType({
  type: 'Query',
  definition(t) {
    // Busca una habitación por su número
    t.field('habitacion', {
      type: 'Habitacion',
      args: {
        numeroHabitacion: nonNull(intArg())
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.habitacion.findUnique({
          where: {
            numero_habitacion: args.numeroHabitacion
          }
        })
      }
    });

    // Busca todas las habitaciones
    t.list.field('habitaciones', {
      type: 'Habitacion',
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.habitacion.findMany()
      }
    });

    // Busca habitaciones por estado (libres o no libres)
    t.list.field('habitacionesPorEstado', {
      type: 'Habitacion',
      args: {
        libre: nonNull(booleanArg())
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.habitacion.findMany({
          where: {
            libre: args.libre
          }
        })
      }
    });
  }
});
