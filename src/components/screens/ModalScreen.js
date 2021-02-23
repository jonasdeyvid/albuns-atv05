import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';

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
    console.log(this.state);
    await this.fetchTracks();
    console.log(this.state);
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CardItem>
            <Text style={{ fontSize: 30 }}>
              {this.props.route.params.albumName}
            </Text>
            <Text style={{ bottom: 0 }}>Lista das Músicas </Text>
          </CardItem>
          <CardItem>
            <FlatList
              data={this.state.tracks}
              renderItem={(item) => {
                return <MusicList item={item.item}></MusicList>;
              }}
              keyExtractor={(item) => item.id}
            />
          </CardItem>
          <CardItem>
            <MyButton onPress={() => this.props.navigation.goBack()}>
              Voltar
            </MyButton>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}
