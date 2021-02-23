import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const MusicRow = ({ item }) => {
  return (
    <View>
      <Text>{`${item.title}`}</Text>
    </View>
  );
};

export default MusicRow;
