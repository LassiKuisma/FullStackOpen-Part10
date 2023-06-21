import { View, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import Constants from 'expo-constants';

import { CURRENT_USER } from '../graphql/queries';
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
  const { loading, data } = useQuery(CURRENT_USER);

  const loggedIn = !!data?.me;
  const displayLogin = !loading && !loggedIn;
  const displayLogout = !loading && loggedIn;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text={'Repositories'} linkTo={'/'} />
        {displayLogin && <AppBarTab text={'Sign in'} linkTo={'/login'} />}
        {displayLogout && (
          <AppBarTab type="logout" text={'Sign out'} linkTo={'/'} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
