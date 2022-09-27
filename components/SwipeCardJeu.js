import { View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import Swiper from "react-native-deck-swiper";
import { TouchableHighlight } from 'react-native-gesture-handler';

import { REGLES } from '../data/reglesData';



const FirstCard = () => {
    return (
        <Text>
            <Text style={styles.titre}> Petite information avant de jouer: </Text>
            <Text style={styles.text}>              Il est <Text style={styles.titreRed}>impératif</Text> de définir votre <Text style={styles.titreRed}>KEKS</Text>. ça peut être une capsule, une carte, une porte. chaques fois qu'il passera à quelqu'un il devra boire  <Text style={styles.titreRed}> 1</Text>  gorgée !           </Text>
            <Text style={styles.textpetit}> Bonne biture ♥ </Text>
        </Text>
    )
}


function SwipeCardJeu() {
    return (
        <View style={styles.container}>
            <Swiper
                cards={[
                    <FirstCard />,
                    "Le plus jeune commence avec le KEKS et boit 2 gorgées",
                    "Tout le monde boit 3",
                    "Tu donnes le KEKS a qui il veut, il boit 3 gorgées en plus",
                    "Cite autant de bières que tu peux en 10sec, tu distribuera autant de gorgées",
                    "4",
                    "5",
                    "6",
                    "7"]}
                renderCard={(card) => {
                    return (
                            <ImageBackground source={require('../assets/image/fond_texte.jpg')} style={styles.containerText}>
                                <Text style={styles.titre}> TITRE </Text>
                                <Text style={styles.textCore}>{card}</Text>
                            </ImageBackground>
                    )
                }}
                onSwiped={(cardIndex) => { console.log(cardIndex) }}
                onSwipedAll={() => { console.log('onSwipedAll') }}
                backgroundColor={'#4FD0E9'}
                cardIndex={0}
                stackSize={3}
            >
                <Button
                    onPress={() => { console.log('oulala') }}
                    title="Press me">
                    You can press me
                </Button>
            </Swiper>
        </View>
    )
}

export default SwipeCardJeu;

const styles = StyleSheet.create({
    textpetit: {
        fontFamily: 'AlegreyaText',
        fontSize: 18,
        color: 'white',
    },
    textCore: {
        fontFamily: 'AlegreyaText',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginHorizontal: '5%',
        paddingRight: '5%',
        padding: '4%'
    },
    text: {
        fontFamily: 'AlegreyaText',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: '20%',
        marginHorizontal: '5%',
        paddingRight: '5%',
        padding: '4%'
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
    containerText: {
        height: '90%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '18%'
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
});