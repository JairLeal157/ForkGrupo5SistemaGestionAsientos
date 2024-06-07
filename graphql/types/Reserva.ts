
import { objectType } from 'nexus'
import { EstadoReserva } from './index'

export const Reserva = objectType({
    name: 'Reserva',
    definition(t) {
      t.string('id')
      t.field('habitacion', {
        type: "Habitacion",
        async resolve(_parent, _args, ctx) {
          return await ctx.prisma.reserva.findUnique({
            where: {
              id: _parent.id
            }
          }).habitacion()
        }
      })
      t.field('usuario', {
        type: "User",
        async resolve(_parent, _args, ctx) {
          return await ctx.prisma.reserva.findUnique({
            where: {
              id: _parent.id
            }
          }).usuario()
        }
      })
      t.field('estado', { type: EstadoReserva })
    }
  })