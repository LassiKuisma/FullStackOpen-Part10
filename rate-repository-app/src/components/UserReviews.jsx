import { FlatList, StyleSheet, View } from 'react-native';
import Text from './Text';
import ReviewItem from './ReviewItem';

import useCurrentUser from '../hooks/useCurrentUser';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = () => {
  const { loading, user } = useCurrentUser({ includeReviews: true });

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const reviews = user.reviews.edges.map((e) => e.node);
  console.log(reviews);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem review={item} repositoryNameAsHeader={true} />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default UserReviews;
