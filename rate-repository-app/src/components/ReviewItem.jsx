import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightBackground,
    padding: 10,
  },
  score: {
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
  contentContainer: {
    marginHorizontal: 10,
  },
  reviewText: {
    width: '90%',
    marginVertical: 5,
  },
});

const DATE_FORMAT = 'dd.MM.yyyy';

const ReviewItem = ({ review, userReviewView }) => {
  const userName = review.user.username;
  const date = review.createdAt;
  const rating = review.rating;
  const text = review.text;
  const repositoryName = review.repository.fullName;

  const header = userReviewView ? repositoryName : userName;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Score rating={rating} />
        <ReviewContent header={header} date={date} text={text} />
      </View>
      {userReviewView && <ReviewActions />}
    </View>
  );
};

const Score = ({ rating }) => {
  return (
    <View style={styles.score}>
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
    <View style={styles.contentContainer}>
      <View>
        <Text fontWeight="bold">{header}</Text>
        <Text>{dateHumanReadable}</Text>
      </View>
      <View style={styles.reviewText}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const ReviewActions = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>View repository</Text>
      <Text>Delete review</Text>
    </View>
  );
};

export default ReviewItem;
