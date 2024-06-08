import { objectType } from 'nexus'
export const Habitacion = objectType({
    name: 'Habitacion',
    definition(t) {
      t.int('numero_habitacion')
      t.boolean('libre')
      t.float('costo_dia')
      t.list.field('reservas', {
        type: "Reserva",
        async resolve(_parent, _args, ctx) {
          return await ctx.prisma.habitacion.findUnique({
            where: {
              numero_habitacion: _parent.numero_habitacion
            }
          }).reservas()
        }
      })
    }
  })