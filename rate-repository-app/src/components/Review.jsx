import { View, StyleSheet, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import useReview from '../hooks/useReview';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightBackground,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    height: 40,
    margin: theme.spacing.formMargin,
    padding: theme.spacing.formPadding,
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colors.textLight,
    textAlign: 'center',
  },
});

const initialValues = {
  repositoryOwner: '',
  repositoryName: '',
  rating: '',
  reviewText: '',
};

const validationSchema = yup.object().shape({
  repositoryOwner: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .min(1, 'Review must be between 1-100')
    .max(100, 'Review must be between 1-100')
    .required('Review is required'),
  reviewText: yup.string().optional(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="repositoryOwner"
        placeholder="Repository owner name"
      />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput
        name="reviewText"
        placeholder="Review"
        multiline={true}
      />
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.buttonText}>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const Review = () => {
  const [createReview] = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { repositoryOwner, repositoryName, rating, reviewText } = values;

    try {
      const ratingAsNumber = Number(rating);

      const created = await createReview({
        repositoryOwner,
        repositoryName,
        rating: ratingAsNumber,
        reviewText,
      });

      const id = created.data.createReview.repositoryId;
      navigate(`/repository/${id}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Review;
