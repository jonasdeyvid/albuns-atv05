import React from 'react';
import { View, Text } from 'react-native';
import MusicRow from './MusicRow';
import Card from './card/Card';
import CardItem from './card/CardItem';

// import { Container } from './styles';

const MusicList = ({ item }) => {
  return (
    <View>
      <MusicRow item={item}></MusicRow>
    </View>
  );
};

export default MusicList;
