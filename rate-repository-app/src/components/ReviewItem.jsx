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

const ReviewItem = ({ review, repositoryNameAsHeader }) => {
  const userName = review.user.username;
  const date = review.createdAt;
  const rating = review.rating;
  const text = review.text;
  const repositoryName = review.repository.fullName;

  const header = repositoryNameAsHeader ? repositoryName : userName;

  return (
    <View style={styles.container}>
      <Rating rating={rating} />
      <ReviewContent header={header} date={date} text={text} />
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

const ReviewContent = ({ header, date, text }) => {
  const dateObject = new Date(date);
  const dateHumanReadable = format(dateObject, DATE_FORMAT);

  return (
    <View>
      <View style={styles.infoContainer}>
        <Text fontWeight="bold">{header}</Text>
        <Text>{dateHumanReadable}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
