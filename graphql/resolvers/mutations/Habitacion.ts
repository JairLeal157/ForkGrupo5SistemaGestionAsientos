import { booleanArg, extendType, floatArg, intArg, nonNull } from 'nexus';

export const MutationHabitacion = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createHabitacion', {
      type: 'Habitacion',
      args: {
        numeroHabitacion: nonNull(intArg()),
        costoDia: nonNull(floatArg()),
        libre: nonNull(booleanArg())
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.habitacion.create({
          data: {
            numero_habitacion: args.numeroHabitacion,
            costo_dia: args.costoDia,
            libre: args.libre,
          }
        });
      }
    });
  }
});