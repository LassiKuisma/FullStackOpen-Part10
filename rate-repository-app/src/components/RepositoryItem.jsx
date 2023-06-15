import { Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
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
  return (
    <View>
      <Text>{value}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default RepositoryItem;
