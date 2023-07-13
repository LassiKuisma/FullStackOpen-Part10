import { View, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightBackground,
    flexDirection: 'row',
  },
  rating: {
    width: theme.rating.size,
    height: theme.rating.size,
    borderRadius: theme.rating.size / 2,
    borderColor: theme.colors.primary,
    borderWidth: theme.rating.border,
    justifyContent: 'center',
  },
  ratingText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const ReviewItem = ({ review }) => {
  const name = review.user.username;
  const date = review.createdAt;
  const rating = review.rating;
  const text = review.text;

  const content = { name, date, text };

  return (
    <View style={styles.container}>
      <Rating rating={rating} />
      <ReviewContent content={content} />
    </View>
  );
};

const Rating = ({ rating }) => {
  return (
    <View style={styles.rating}>
      <Text color="primary" fontWeight="bold" style={styles.ratingText}>
        {rating}
      </Text>
    </View>
  );
};

const ReviewContent = ({ content }) => {
  const { name, date, text } = content;
  return (
    <View>
      <Text fontWeight="bold">{name}</Text>
      <Text>{date}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default ReviewItem;
