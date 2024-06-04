import { objectType } from 'nexus'
import { EnumRoleName } from './index'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.nullable.string('email')
    t.nullable.string('image')
    t.field('role', { type: EnumRoleName })
    t.list.field('reservas', {
      type: "Reserva",
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user.findUnique({
          where: {
            id: _parent.id
          }
        }).reservas()
      }
    })
  }
})