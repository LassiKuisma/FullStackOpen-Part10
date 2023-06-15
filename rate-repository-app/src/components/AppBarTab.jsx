import { Pressable, Text } from 'react-native';

const AppBarTab = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};
export default AppBarTab;
