import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab
        text={'Repositories'}
        onPress={() => console.log('clicked on "repositories"')}
      />
    </View>
  );
};

export default AppBar;
