import { Text, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textLight,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  container: {
    padding: 10,
  },
});

const AppBarTab = ({ text, linkTo }) => {
  return (
    <View style={styles.container}>
      <Link to={linkTo}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
