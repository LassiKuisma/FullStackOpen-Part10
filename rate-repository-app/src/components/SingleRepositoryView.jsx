import { FlatList, View, StyleSheet } from 'react-native';

import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';

import theme from '../theme';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightBackground,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

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

  const reviews = repository.reviews.edges.map((n) => n.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} displayLink={true} />
      )}
    />
  );
};

export default SingleRepositoryView;
