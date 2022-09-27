import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

/* const Game = [
    /*{titre: "alcool", regle: "1"},
    {titre: "keks", regle: "2"},
    {titre: "culture", regle: "3"},
    {titre: "alcool", regle: "4"},
    {titre: "keks", regle: "5"}
    "1",
    "2",
    "3",
    "4",
    "5"
].map((item) => <Regles/> );


/*function Game (titre, regle) {
    this.titre=titre;
    this.regle=regle;
}

var un=new Game ("Titre1", "Regle1");
var deux=new Game ("Titre2", "Regle2");
var trois=new Game ("Titre3", "Regle3"); */

const randomiser=(arr,oldVal)=>{
  const random = arr[Math.floor(Math.random() * arr.length)];
  if(random===oldVal)
  {
    const newArr=arr.filter(newArr=>arr!==newArr)
   return randomiser(newArr) 
  }
  return random
}
  
  export default function Regles() {
    const arr=["1", "2", "3", "4", "5"]
    const [displayArr,setDisplayArr]=useState(randomiser(arr))
  
    return (
      <View className='Regles'>
        <Button onPress={()=>setDisplayArr(randomiser(arr,displayArr))} 
        title="Tap here"/>
        <Text>{displayArr}</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
    textCore: {
        fontFamily: 'AlegreyaText',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    titre: {
        fontFamily: 'AlegreyaTitre',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '8%',
        marginRight: '15%',
        marginTop: '35%'
    },
    textCoreContainer: {
        paddingTop: '10%'
    },
})