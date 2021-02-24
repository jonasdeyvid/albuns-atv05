import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const MusicRow = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Text>{`${index} - (${item.duration}) - ${item.title}`}</Text>
    </View>
  );
};

export default MusicRow;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

