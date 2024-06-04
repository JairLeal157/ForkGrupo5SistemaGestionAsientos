import { enumType } from 'nexus'

export const EstadoReserva = enumType({
    name: 'EstadoReserva',
    members: ['reservado', 'checkin', 'checkout']
})
  