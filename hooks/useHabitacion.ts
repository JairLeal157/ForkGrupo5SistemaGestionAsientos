
import { Habitacion } from '@/types/types';
import { gql, useMutation, useQuery } from '@apollo/client';


const CREATE_RESERVA = gql`
mutation Mutation($numeroHabitacion: Int!, $costoDia: Float!, $libre: Boolean!) {
    createHabitacion(numeroHabitacion: $numeroHabitacion, costoDia: $costoDia, libre: $libre) {
      numero_habitacion
      libre
      costo_dia
    }
  }
`;

const GET_HABITACIONES = gql`
query Query {
    habitaciones {
      numero_habitacion
      libre
      costo_dia
    }
  }
`;

const GET_HABITACION_BY_ID = gql`
query Query($numeroHabitacion: Int!) {
    habitacion(numeroHabitacion: $numeroHabitacion) {
      numero_habitacion
      libre
      costo_dia
    }
  }
`;


const GET_HABITACIONES_BY_ESTADO = gql`
query Query($libre: Boolean!) {
    habitacionesPorEstado(libre: $libre) {
      numero_habitacion
      libre
      costo_dia
    }
  }
`;

export const useGetHabitaciones = () => {
    const { data, loading, error } = useQuery<{
        habitaciones: Habitacion[];
    }>(GET_HABITACIONES);
    return { data, loading, error };
}

export const useGetHabitacionById = (numeroHabitacion: number) => {
    const { data, loading, error } = useQuery<{
        habitacion: Habitacion;
    }>(GET_HABITACION_BY_ID, {
        variables: { numeroHabitacion }
    });
    return { data, loading, error };
}

export const useGetHabitacionesByEstado = (libre: boolean) => {
    const { data, loading, error } = useQuery<{
        habitacionesPorEstado: Habitacion[];
    }>(GET_HABITACIONES_BY_ESTADO, {
        variables: { libre }
    });
    return { data, loading, error };
}

export const useCreateHabitacion = () => {
    const [createHabitacion, { data, loading, error }] = useMutation<{
        createHabitacion: Habitacion;
    }>(CREATE_RESERVA);
    return { createHabitacion, data, loading, error };
}

//example of use
// const { data, loading, error } = useGetHabitaciones();
// const { data, loading, error } = useGetHabitacionById(1);
// const { data, loading, error } = useGetHabitacionesByEstado(true);
// const { createHabitacion, data, loading, error } = useCreateHabitacion();
// createHabitacion({ variables: { numeroHabitacion: 1, costoDia: 100, libre: true } });