import { gql, useQuery } from "@apollo/client";
import { User } from "@/types/types";

const GET_ALL_USERS = gql`
  query Users {
    users {
      email
      id
      image
      name
      role
    }
  }
`;

export const useUsers = () => {
  const { data, loading, error } = useQuery<{
    users: User[];
  }>(GET_ALL_USERS);
  return { data, loading, error };
};
