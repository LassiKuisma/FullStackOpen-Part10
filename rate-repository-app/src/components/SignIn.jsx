import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightBackground,
  },
  textInput: {
    placeholderTextColor: theme.colors.textSecondary,
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: theme.colors.textLight,
    textAlign: 'center',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.textInput}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.textInput}
      />
      <Pressable onPress={onSubmit} style={styles.loginButton}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={styles.loginButtonText}
        >
          Login
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
