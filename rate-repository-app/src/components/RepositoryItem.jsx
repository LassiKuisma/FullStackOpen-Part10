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
    paddingLeft: 20,
    paddingRight: 20,
  },
  info: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  language: {
    color: theme.colors.textLight,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 10,
  },
});

const RepositoryItem = (props) => {
  const item = props.item;

  return (
    <View>
      <BasicInfo item={item} />
      <RepositoryStats item={item} />
    </View>
  );
};

const BasicInfo = ({ item }) => {
  return (
    <View style={styles.info}>
      <Image
        style={styles.logo}
        source={item.ownerAvatarUrl}
        alt="user avatar"
      />
      <View style={{ alignItems: 'flex-start' }}>
        <Text fontWeight="bold" fontSize="subheading">
          {item.fullName}
        </Text>
        <Text>{item.description}</Text>
        <Text fontWeight="bold" style={styles.language}>
          {item.language}
        </Text>
      </View>
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
