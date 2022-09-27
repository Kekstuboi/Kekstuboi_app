import { View, Text, StyleSheet, ImageBackground, StatusBar, SafeAreaView, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import SwipeCard2 from '../components/SwipeCard2';
import NoMoreCards from '../components/SwipeCard2';


function CarteScreen() {
    const navigation = useNavigation();

    function pressHandlerBeer() {
        navigation.navigate('MenuScreen')
          };

    return (
        <>
            <StatusBar style='dark' />
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../assets/image/pageCarte/fond_carte_jaune2.jpg')} style={styles.backgroundImage} >
                <View style={styles.bigContainer}>
                        <ImageBackground source={require('../assets/image/etiquette_small.png')} style={styles.imageTitreContainer}>
                            <Text style={styles.title}>Alors bande de poches !</Text>
                        </ImageBackground>
                    </View>
                    <SwipeCard2/>
                    <View style={styles.containerTitle}> 
                        <Button title='Clique' onPress={pressHandlerBeer}></Button>
                    </View>
                </ImageBackground>
            </SafeAreaView >
        </>
    );
}


export default CarteScreen;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'AlegreyaTitre',
        fontSize: 27,
        color: 'black',
        textAlign: 'center'
    },
    bigContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%'
    },
    imageTitreContainer:{
        height: 120,
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTitle:{
        paddingTop: '20%',
        paddingHorizontal: '5%'
    },
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
    },
}
);