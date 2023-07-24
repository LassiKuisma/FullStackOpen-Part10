import { StyleSheet, Pressable } from 'react-native';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
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

const Button = ({ onSubmit, text }) => {
  return (
    <Pressable onPress={onSubmit} style={styles.submitButton}>
      <Text fontWeight="bold" fontSize="subheading" style={styles.buttonText}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
