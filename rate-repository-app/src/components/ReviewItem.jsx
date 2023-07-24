import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import theme from '../theme';
import Text from './Text';
import Button from './Button';

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
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  reviewButton: {
    // could not figure out how to get flexcontainer's gap property to work
    // in react native (might not be implemented), so this will do the trick
    marginRight: 10,
    padding: 5,
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
  const viewRepository = () => {
    console.log('viewing repository');
  };

  const deleteReview = () => {
    console.log('deleting review');
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        onSubmit={viewRepository}
        text={'View repository'}
        style={styles.reviewButton}
      />
      <Button
        onSubmit={deleteReview}
        text={'Delete review'}
        style={styles.reviewButton}
        color="red"
      />
    </View>
  );
};

export default ReviewItem;
