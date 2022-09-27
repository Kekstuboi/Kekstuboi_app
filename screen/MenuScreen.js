import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'



function MenuScreen({ navigation}) {
    function pressHandler (){
        navigation.navigate('CarteScreen')
    };
    function pressHandler2 (){
        navigation.navigate('AddPlayerScreen')
    };

    return (
        <>
            <StatusBar style='dark' />
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../assets/image/warnerfond.jpg')} style={styles.backgroundImage} >
                            <Image source={require('../assets/image/titre2.png')}
                                style={styles.imageTitre} />
                        <View style={styles.viewGeneral}>
                            <View style={styles.keksplose}>
                                <Text style={styles.textAnnonce}> Laisse moi te trouver un jeu de...</Text>
                            </View>
                            <View style={styles.autreImage}>
                                <TouchableOpacity onPress={pressHandler}>
                                    <Image source={require("../assets/image/Card.png")}
                                        style={styles.appGame}
                                        resizeMode='stretch' />
                                    <View
                                        position='absolute'
                                        bottom={'-10%'}
                                        right={'45%'}>
                                        <Text style={styles.cartedesautres}> CARTES </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { alert("DÉS") }}>
                                    <Image source={require("../assets/image/Dice.png")}
                                        style={styles.appGame}
                                        resizeMode='stretch' />
                                    <View
                                        position='absolute'
                                        bottom={'15%'}
                                        right={'66%'}>
                                        <Text style={styles.cartedesautres}> DÉS </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.keksplose}>
                                <TouchableOpacity onPress={() => { alert("AUTRES JEUX") }}>
                                    <Image source={require("../assets/image/other.png")}
                                        style={styles.appGame}
                                        resizeMode='stretch' />
                                    <View
                                        position='absolute'
                                        bottom={'73%'}
                                        left={'14%'}>
                                        <Text style={styles.cartedesautres} > AUTRES </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.keksplose}>
                                <Text style={styles.textAnnonce}>Ou confie moi ta soirée...</Text>
                                <TouchableOpacity onPress={pressHandler2}>
                                    <Image source={require("../assets/image/App_game2.png")}
                                        style={styles.appGame}
                                        resizeMode='stretch' />
                                    <View style={styles.textViewKeksplose}>
                                        <Text style={styles.cartedesautres}> KEKSPLOSE </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <Pressable
                                onPress={() => { alert("@KEKSTUBOI_Jeu_2_Soiree") }}
                                position='absolute'
                                right={0}
                                bottom={0}>
                                <Ionicons name={'logo-instagram'} size={50} color="white" />
                            </Pressable>
                </ImageBackground>
            </SafeAreaView >
        </>
    );
}

export default MenuScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    cartedesautres: {
        fontSize: deviceHeight < 670 ? 21 : 25,
        color: 'white',
        fontFamily: 'foo'
    },
    textContainer: {
        marginLeft: 18,

    },
    textAnnonce: {
        fontSize: 21,
        color: 'white',
        fontFamily: 'AlegreyaTitre'
    },
    appGame: {
        width: deviceHeight < 670 ? 127 : 150,
        height: deviceHeight < 670 ? 127 : 150,
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
    imageTitre: {
        width: 280,
        height: 155,
        marginLeft : "10%"
    },
    containerTitre: {
        flex: 1,
        alignItems: 'center'
    },
    keksplose: {
        alignItems: 'center',
    },
    autreImage: {
        justifyContent: 'space-between',
        marginHorizontal: deviceHeight < 670 ? 30 : 20,
        marginBottom: 5,
        flexDirection: 'row'
    },
    textViewKeksplose: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: '30%'
    },
    textView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
});
