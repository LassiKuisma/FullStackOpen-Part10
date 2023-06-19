import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
    marginTop: 5,
    marginLeft: 12,
  },
  textInput: {
    placeholderTextColor: theme.colors.textSecondary,
    height: 40,
    margin: 12,
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const inputStyle = [styles.textInput, style];

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={inputStyle}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
