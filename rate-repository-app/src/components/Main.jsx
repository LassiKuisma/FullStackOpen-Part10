import Constants from 'expo-constants';

import { StyleSheet, Text, View } from 'react-native';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate repository app</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
