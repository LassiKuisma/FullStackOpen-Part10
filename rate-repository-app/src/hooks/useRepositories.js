import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (args) => {
  const orderBy = args?.orderBy || 'CREATED_AT';
  const orderDirection = args?.orderDirection || 'DESC';
  const keyword = args?.keyword || '';

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword: keyword,
    },
  });

  return {
    repositories: data?.repositories,
    loading,
    refetch,
    error,
  };
};

export default useRepositories;
