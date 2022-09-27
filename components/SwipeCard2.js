import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, LogBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from './PrimaryButton';

import SwipeCards from 'react-native-swipe-cards';


class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }


  render() {
    return (
      //<LinearGradient style={styles.cardGradient} colors={['#ba9331', '#5f4b19']}>
      <ImageBackground style={styles.card} source={require('../assets/image/etiquette_large.png')}>
        <Text style={styles.text}>{this.props.text}</Text>
        <View style={styles.containerTitle}>
          <Button title="Press"
            onPress={this._forceLeftSwipe}></Button>
        </View>
      </ImageBackground>

      //</LinearGradient>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <PrimaryButton>
          <Ionicons name="beer" size={30} color="black" />
          <Text style={styles.text}> Clique </Text>
        </PrimaryButton>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { text: <Text>Vous êtes plus de<Text style={styles.textImportant}>   5 </Text>                                                à <Text style={styles.textImportant}>jouer </Text>?</Text> },
        { text: <Text> T'es assez frais pour <Text style={styles.textImportant}>  COMPRENDRE </Text> des <Text style={styles.textImportant}>règles ?</Text></Text> },
        { text: <Text><Text style={styles.textImportant2} color='black'>ET LA QUESTION IMPORTANTE :</Text>                                   Vous avez <Text style={styles.textImportant}> soif ?</Text></Text> },
      ]
    };
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`)
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`)
  }
  render() {

    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        stack={false}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
}

const styles = StyleSheet.create({
  textImportant2: {
    fontFamily: 'AlegreyaTitre',
    fontSize: 32,
    color: 'black'
  },
  textImportant: {
    fontFamily: 'AlegreyaTitre',
    fontSize: 32,
    color: '#7f4d10'
  },
  text: {
    fontFamily: 'AlegreyaText',
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    padding: 12,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 350,
    elevation: 4
  },
  cardGradient: {
    borderRadius: 20,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})