import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

import { useState } from 'react';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker: {
    padding: 10,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const orderingTypes = {
  latestFirst: {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  },
  bestFirst: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC',
  },
  worstFirst: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC',
  },
};

const OrderingPicker = ({ ordering, setOrdering }) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={ordering}
      onValueChange={(itemValue) => setOrdering(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="latestFirst" />
      <Picker.Item label="Highest rated repositories" value="bestFirst" />
      <Picker.Item label="Lowest rated repositories" value="worstFirst" />
    </Picker>
  );
};

export const RepositoryListContainer = ({
  repositories,
  onPress,
  ordering,
  setOrdering,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <OrderingPicker ordering={ordering} setOrdering={setOrdering} />
      }
      renderItem={({ item }) => (
        <Pressable onPress={() => onPress(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const [ordering, setOrdering] = useState('latestFirst');

  const { repositories } = useRepositories(orderingTypes[ordering]);
  const navigate = useNavigate();

  const onPress = (id) => {
    navigate(`/repository/${id}`);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onPress={onPress}
      ordering={ordering}
      setOrdering={setOrdering}
    />
  );
};

export default RepositoryList;
