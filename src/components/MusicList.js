import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MusicRow from './MusicRow';
import Card from './card/Card';
import CardItem from './card/CardItem';

// import { Container } from './styles';

const MusicList = ({ item }) => {
  return (
    <View style={styles.container}>
      <MusicRow item={item.item} index={item.index}></MusicRow>
    </View>
  );
};

export default MusicList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
