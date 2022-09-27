import { useState } from 'react';
import { StatusBar, StyleSheet, ImageBackground, View, Text, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import NameInput from '../components/NameInput';

function AddPlayerScreen() {
    const navigation = useNavigation();

    function pressToGame() {
        navigation.navigate('KeksploseScreen')
    };

    const [nameSuite, setEnteredName] = useState([]);

    function addNameHandler(enteredNameText) {
        setEnteredName((currentName) => [
            ...currentName,
            { text: enteredNameText },
        ]);
    }

    return (
        <>
            <StatusBar style='dark' />
            <View style={styles.container}>
                <ImageBackground source={require('../assets/image/fond_keksplose2.png')} style={styles.backgroundImage}>
                    <View>
                        <NameInput onAddName={addNameHandler} />
                        <View style={styles.viewContainer}>
                            <ImageBackground style={styles.card} source={require('../assets/image/etiquette_large.png')}>
                                <FlatList
                                    numColumns={2}
                                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                                    data={nameSuite}
                                    renderItem={(itemData) => {
                                        return (
                                            <View>
                                                <Text style={styles.text}>{itemData.item.text}
                                                </Text>
                                            </View>
                                        )
                                    }} />
                            </ImageBackground>
                            <View style={styles.viewOld}>
                                <TouchableOpacity onPress={pressToGame}>
                                    <Image source={require('../assets/image/banderolle.png')} style={styles.old} />
                                    <Text style={styles.title}> JOUER ! </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}

export default AddPlayerScreen

const styles = StyleSheet.create({
    title: {
        fontFamily: 'AlegreyaTitre',
        fontSize: 42,
        color: 'black',
        textAlign: 'center',
        position: 'absolute',
        left: '32%'
    },
    viewOld: {
        flex: 1,
        paddingTop: '8%',
        zIndex: 1,
    },
    old: {
        height: 70,
        width: 400,
        marginBottom: '20%'
    },
    viewContainer: {
        flex: 1,
        marginTop: '10%',
        alignItems: 'center',
    },
    containerText: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    text: {
        fontFamily: 'AlegreyaTitre',
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 25,
        marginTop: 10
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 350,
        elevation: 4,
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
});