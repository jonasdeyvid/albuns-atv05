import React, { Component } from 'react';
import { ScrollView, Text, FlatList, StyleSheet, View } from 'react-native';

import MyButton from '../MyButton';
import Card from '../card/Card';
import CardItem from '../card/CardItem';
import { BASE_URL } from '@env';
import MusicList from '../MusicList';

export default class ModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [] };
  }

  async fetchTracks() {
    const data = await (
      await fetch(`${BASE_URL + this.props.route.params.albumTracks}`)
    ).json();
    this.setState({ tracks: data.tracks });
  }
  async componentDidMount() {
    await this.fetchTracks();
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardItem style={styles.cardTitle}>
          <View style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 20, fontWeight: "bold"}}>
              .:: {this.props.route.params.albumName} ::.
            </Text>
            <Text style={{ bottom: 0 }}>Lista das Músicas </Text>
          </View>
        </CardItem>
        <CardItem style={styles.cardTracks}>
          <FlatList
            data={this.state.tracks}
            renderItem={(item) => <MusicList item={item}></MusicList>}
            keyExtractor={(index, item) => index + item}
          />
        </CardItem>
        <CardItem style={styles.cardButton}>
          <MyButton
            onPress={() => this.props.navigation.goBack()}
            style={styles.btn}
          >
            Voltar
          </MyButton>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btn: {
    bottom: 1,
  },
  cardTitle: {
    flex: 0,
    alignItems: "center",
    justifyContent: 'center',
  },
  cardTracks: {
    flex: 3,
  },
  cardButton: {
    flex: 0,
  },
});
