import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';

const SingleRepositoryView = () => {
  const { repositoryId } = useParams();
  const { data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id: repositoryId,
    },
  });

  const repository = data?.repository;

  if (!repository) {
    return null;
  }

  return <RepositoryItem item={repository} displayLink={true} />;
};

export default SingleRepositoryView;
