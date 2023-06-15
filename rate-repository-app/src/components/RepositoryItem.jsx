import { Image, StyleSheet, View } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  logo: {
    width: theme.icon.size,
    height: theme.icon.size,
  },
  cell: {
    alignItems: 'center',
    paddingLeft: theme.padding.statsPadding,
    paddingRight: theme.padding.statsPadding,
  },
});

const RepositoryItem = (props) => {
  const item = props.item;

  return (
    <View>
      <Image
        style={styles.logo}
        source={item.ownerAvatarUrl}
        alt="user avatar"
      />
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <RepositoryStats item={item} />
    </View>
  );
};

const RepositoryStats = ({ item }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <StatsCell title={'Stars'} value={item.stargazersCount} />
      <StatsCell title={'Forks'} value={item.forksCount} />
      <StatsCell title={'Reviews'} value={item.reviewCount} />
      <StatsCell title={'Rating'} value={item.ratingAverage} />
    </View>
  );
};

const StatsCell = ({ title, value }) => {
  const valueWithSuffix =
    value >= 1000
      ? (value / 1000).toFixed(1).toString() + 'k'
      : value.toString();

  return (
    <View style={styles.cell}>
      <Text fontWeight="bold">{valueWithSuffix}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default RepositoryItem;
