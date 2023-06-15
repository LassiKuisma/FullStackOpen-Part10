import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab
        text={'Repositories'}
        onPress={() => console.log('clicked on "repositories"')}
      />
      <AppBarTab
        text={'Another tab'}
        onPress={() => console.log('clicked on another tab')}
      />
    </View>
  );
};

export default AppBar;
