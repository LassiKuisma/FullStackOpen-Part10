import { View, StyleSheet, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

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
  username: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().min(5).max(30).required('Username is required'),
  password: yup.string().min(5).max(30).required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirm is required'),
});

const CreateAccountForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirm"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.buttonText}>
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const CreateAccount = () => {
  const onSubmit = async (values) => {
    console.log('Create account:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateAccountForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateAccount;
