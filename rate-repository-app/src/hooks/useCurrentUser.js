import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../graphql/queries';

const useCurrentUser = () => {
  const { data, error, loading, refetch } = useQuery(CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    user: data?.me,
    loading,
    refetch,
    error,
  };
};

export default useCurrentUser;
