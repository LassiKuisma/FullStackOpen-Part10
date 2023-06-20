import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textLight,
  },
  container: {
    padding: 10,
  },
});

const AppBarTab = ({ text, linkTo }) => {
  return (
    <View style={styles.container}>
      <Link to={linkTo}>
        <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
          {text}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
