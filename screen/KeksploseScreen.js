import React from 'react';
import { StatusBar, StyleSheet, ImageBackground, SafeAreaView, View, Text } from 'react-native';

import Regles from '../components/Regles';


export default function KeksploseScreen() {
    return (
        <>
            <StatusBar style='dark' />
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../assets/image/fond_keksplose_vrai.jpg')} style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <ImageBackground source={require('../assets/image/etiquette_keksplose.png')} style={styles.containerText}>
                            <Regles/>
                        </ImageBackground>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </>
    );
}

/*<Text style={styles.titre}> Petite information avant de commencer : </Text>
<Text style={styles.text}> Il est <Text style={styles.titreRed}>impératif</Text> de définir votre <Text style={styles.titreRed}>KEKS</Text>. ça peut être une capsule, une carte, une porte, chaques fois qu'il passera à quelqu'un il devra boire 1 gorgée</Text>
<Text style={styles.textpetit}> Bonne biture ♥ </Text>
<View>
    <Text>
    </Text>
</View>*/

const styles = StyleSheet.create({
    textpetit: {
        fontFamily: 'AlegreyaText',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginTop: '10%',
        marginHorizontal: '5%',
        paddingRight: '10%'
    },
    text: {
        fontFamily: 'AlegreyaText',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        marginHorizontal: '5%',
        paddingRight: '10%'
    },
    titreRed: {
        fontFamily: 'AlegreyaTitre',
        fontSize: 30,
        color: '#e72020',
        textAlign: 'center',
        marginTop: '10%',
        marginHorizontal: '5%',
        paddingRight: '10%'
    },
    titre: {
        fontFamily: 'AlegreyaTitre',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        marginHorizontal: '5%',
        paddingRight: '10%'
    },
    textContainer:{
        marginRight:'10%',
    },
    containerText: {
        height: '95%',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        marginTop: '8%'
    },
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
    },
});