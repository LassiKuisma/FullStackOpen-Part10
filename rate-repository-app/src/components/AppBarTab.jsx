import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textAppBar,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  container: {
    padding: theme.padding.tabPadding,
  },
});

const AppBarTab = ({ text, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
