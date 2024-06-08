import { gql, useMutation, useQuery } from '@apollo/client';
import { EstadoReserva, Reserva } from '../types/types';

const GET_ALL_RESERVAS = gql`
query Reservas {
    reservas {
      id
      habitacion {
        numero_habitacion
      }
      usuario {
        id
        name
        role
        email
      }
      estado
    }
  }
`;

const GET_RESERVAS_BY_ESTADO = gql`
query ReservasPorEstado($estado: EstadoReserva!) {
    reservasPorEstado(estado: $estado) {
      id
      usuario {
        id
        name
        email
        role
      }
      habitacion {
        numero_habitacion
      }
      estado
    }
  }
`;

const GET_RESERVA_BY_ID = gql`
query Reserva($reservaId: String!) {
    reserva(reservaId: $reservaId) {
      id
      habitacion {
        numero_habitacion
      }
      usuario {
        id
        name
        email
        role
      }
      estado
    }
  }
`;


const GET_RESERVAS_BY_HABITACION = gql`
query Habitacion($numeroHabitacion: Int!) {
    habitacion(numeroHabitacion: $numeroHabitacion) {
      reservas {
        id
        habitacion {
          numero_habitacion
        }
        usuario {
          id
          name
          email
          role
        }
        estado
      }
    }
  }
`;


const GET_RESERVAS_BY_HABITACION_AND_ESTADO = gql`
query Query($numeroHabitacion: Int!, $estado: EstadoReserva!) {
    reservasPorHabitacionYEstado(numeroHabitacion: $numeroHabitacion, estado: $estado) {
      id
      habitacion {
        numero_habitacion
      }
      usuario {
        id
        name
        email
        role
      }
      estado
    }
  }
`;

const GET_RESERVAS_BY_USER = gql`
query Query($userId: String!) {
    user(userId: $userId) {
      reservas {
        id
        habitacion {
          numero_habitacion
        }
        usuario {
          id
          name
          email
          role
        }
        estado
      }
    }
  }
`;



const GET_RESERVAS_BY_USER_AND_ESTADO = gql`
query Query($userId: String!, $estado: EstadoReserva!) {
    reservasPorUsuarioYEstado(userId: $userId, estado: $estado) {
      id
      habitacion {
        numero_habitacion
      }
      usuario {
        id
        name
        email
        role
      }
      estado
    }
  }
`;

const CREATE_RESERVA = gql`
mutation Mutation($usuarioId: String!, $numeroHabitacion: Int!) {
    createReserva(usuarioId: $usuarioId, numeroHabitacion: $numeroHabitacion) {
      id
      habitacion {
        numero_habitacion
      }
      usuario {
        id
        email
        name
        role
      }
      estado
    }
  }
`;

const CHECKIN_RESERVA = gql`
mutation CheckinReserva($reservaId: String!) {
    checkinReserva(reservaId: $reservaId) {
      id
      habitacion {
        numero_habitacion
      }
      usuario {
        id
        name
        email
        role
      }
      estado
    }
  }
`;

const CHECKOUT_RESERVA = gql`
mutation CheckoutReserva($reservaId: String!) {
    checkoutReserva(reservaId: $reservaId) {
      id
      habitacion {
        numero_habitacion
      }
      usuario {
        id
        name
        email
        role
      }
      estado
    }
  }
`;

const DELETE_RESERVA = gql`
mutation EliminarReserva($reservaId: String!) {
    eliminarReserva(reservaId: $reservaId) {
      id
      habitacion {
        numero_habitacion
        libre
      }
      usuario {
        id
        name
        email
        role
      }
      estado
    }
  }
`;

export const useGetAllReservas = () => {
    const { data, loading, error } = useQuery<{
        reservas: Reserva[];
    }>(GET_ALL_RESERVAS);
    return { data, loading, error };
};

export const useGetReservasByEstado = (estado: EstadoReserva) => {
    const { data, loading, error } = useQuery<{
        reservasPorEstado: Reserva[];
    }>(GET_RESERVAS_BY_ESTADO, {
        variables: {
            estado
        }
    });
    return { data, loading, error };
};


export const useGetReservaById = (reservaId: string) => {
    const { data, loading, error } = useQuery<{
        reserva: Reserva;
    }>(GET_RESERVA_BY_ID, {
        variables: {
            reservaId
        }
    });
    return { data, loading, error };
}

export const useGetReservasByHabitacion = (numeroHabitacion: number) => {
    const { data, loading, error } = useQuery<{
        habitacion: {
            reservas: Reserva[];
        }
    }>(GET_RESERVAS_BY_HABITACION, {
        variables: {
            numeroHabitacion
        }
    });
    return { data, loading, error };
}

export const useGetReservasByHabitacionAndEstado = (numeroHabitacion: number, estado: EstadoReserva) => {
    const { data, loading, error } = useQuery<{
        reservasPorHabitacionYEstado: Reserva[];
    }>(GET_RESERVAS_BY_HABITACION_AND_ESTADO, {
        variables: {
            numeroHabitacion,
            estado
        }
    });
    return { data, loading, error };
}

export const useGetReservasByUser = (userId: string) => {
    const { data, loading, error } = useQuery<{
        user: {
            reservas: Reserva[];
        }
    }>(GET_RESERVAS_BY_USER, {
        variables: {
            userId
        }
    });
    return { data, loading, error };
}

export const useGetReservasByUserAndEstado = (userId: string, estado: EstadoReserva) => {
    const { data, loading, error } = useQuery<{
        reservasPorUsuarioYEstado: Reserva[];
    }>(GET_RESERVAS_BY_USER_AND_ESTADO, {
        variables: {
            userId,
            estado
        }
    });
    return { data, loading, error };
}

export const useCreateReserva = () => {
    const [createReserva, { data, loading, error }] = useMutation<{
        createReserva: Reserva;
    }>(CREATE_RESERVA);
    return { createReserva, data, loading, error };
}

export const useCheckinReserva = () => {
    const [checkinReserva, { data, loading, error }] = useMutation<{
        checkinReserva: Reserva;
    }>(CHECKIN_RESERVA);
    return { checkinReserva, data, loading, error };
}

export const useCheckoutReserva = () => {
    const [checkoutReserva, { data, loading, error }] = useMutation<{
        checkoutReserva: Reserva;
    }>(CHECKOUT_RESERVA);
    return { checkoutReserva, data, loading, error };
}

export const useDeleteReserva = () => {
    const [eliminarReserva, { data, loading, error }] = useMutation<{
        eliminarReserva: Reserva;
    }>(DELETE_RESERVA);
    return { eliminarReserva, data, loading, error };
}

// example usage
// const { data, loading, error } = useGetAllReservas();
// const { data, loading, error } = useGetReservasByEstado(EstadoReserva.reservado);
// const { data, loading, error } = useGetReservaById('some-reserva-id');
// const { data, loading, error } = useGetReservasByHabitacion(101);
// const { data, loading, error } = useGetReservasByHabitacionAndEstado(101, EstadoReserva.reservado);
// const { data, loading, error } = useGetReservasByUser('some-user-id');
// const { data, loading, error } = useGetReservasByUserAndEstado('Some-user-id', EstadoReserva.reservado);
// const { createReserva, data, loading, error } = useCreateReserva();
// createReserva({ variables: { usuarioId: 'some-user-id', numeroHabitacion: 101 } });
// const { checkinReserva, data, loading, error } = useCheckinReserva();
// checkinReserva({ variables: { reservaId: 'some-reserva-id' } });
// const { checkoutReserva, data, loading, error } = useCheckoutReserva();
// checkoutReserva({ variables: { reservaId: 'some-reserva-id' } });
// const { eliminarReserva, data, loading, error } = useDeleteReserva();
// eliminarReserva({ variables: { reservaId: 'some-reserva-id' } });