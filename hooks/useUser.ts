import { User } from "@/types/types";
import { gql, useMutation, useQuery } from "@apollo/client";
const GET_USER_BY_ID = gql`
query Query($userId: String!) {
  user(userId: $userId) {
    id
    name
    email
    image
    role
    reservas {
      id
      estado
    }
  }
}
`;
const GET_ALL_USERS = gql`
  query Users {
    users {
      email
      id
      image
      name
      role
      reservas {
        id
        estado
      }
    }
  }
`;

const CHANGE_DATA = gql`
mutation UpdateUser($userId: String!, $role: Enum_RoleName, $name: String) {
  updateUser(userId: $userId, role: $role, name: $name) {
    name
    id
    role
    email
    image
  }
}
`;

const DELETE_USER = gql`
mutation deleteUser($userId: String!) {
  deleteUser(userId: $userId) {
    id
    name
    email
    image
    role
  }
}
`;

export const useGetAllUsers = () => {
  const { data, loading, error } = useQuery<{
    users: User[];
  }>(GET_ALL_USERS);
  return { data, loading, error };
};

export const useChangeDataUser = () => {
  const [updateUser, { data, loading, error }] = useMutation<{
    updateUser: User;
  }>(CHANGE_DATA);
  return { updateUser, data, loading, error };
}

export const useDeleteUser = () => {
  const [deleteUser, { data, loading, error }] = useMutation<{
    deleteUser: User;
  }>(DELETE_USER);
  return { deleteUser, data, loading, error };
}

export const useGetUserById = (userId: string) => {
  const { data, loading, error } = useQuery<{
    user: User;
  }>(GET_USER_BY_ID, {
    variables: {
      userId
    }
  });
  return { data, loading, error };
};

// example of use
// const { data, loading, error } = useGetAllUsers();

// const { updateUser, data, loading, error } = useChangeDataUser(); 
// updateUser({ variables: { userId: "1", role: "USER", name: "Juan" } });

// const { deleteUser, data, loading, error } = useDeleteUser();
// deleteUser({ variables: { userId: "1" } });

// const { data, loading, error } = useGetUserById("1");
