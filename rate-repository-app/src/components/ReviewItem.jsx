import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

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
    margin: 10,
  },
  ratingText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  textContainer: {
    width: '90%',
    marginBottom: 10,
  },
});

const DATE_FORMAT = 'dd.MM.yyyy';

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

  const dateObject = new Date(date);
  const dateHumanReadable = format(dateObject, DATE_FORMAT);

  return (
    <View>
      <View style={styles.infoContainer}>
        <Text fontWeight="bold">{name}</Text>
        <Text>{dateHumanReadable}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
