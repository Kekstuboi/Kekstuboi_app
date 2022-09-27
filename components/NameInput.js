import { useState } from 'react';
import { View, TextInput, ImageBackground, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';

function NameInput(props) {
    const [enteredNameText, setEnteredNameText] = useState('');

    function nameInputHandler(enteredText) {
        setEnteredNameText(enteredText);
    }

    function addNameHandler() {
        props.onAddName(enteredNameText);
        setEnteredNameText('');
    }


    return (
        <>
            <View style={styles.bigContainer}>
                <ImageBackground source={require('../assets/image/etiquette_old.png')} style={styles.imageTitreContainer}>
                    <Text style={styles.title}>Balance tes potes:</Text>
                    <View>
                        <TextInput
                            style={styles.nameInput}
                            maxLength={10}
                            returnKeyLabel={'next'}
                            autoCorrect={false}
                            placeholder="Envoie ici!"
                            onChangeText={nameInputHandler}
                            value={enteredNameText} 
                            returnKeyType='done' />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={addNameHandler}>
                            <Ionicons name="md-add" size={45} color="black"/>
                        </PrimaryButton>
                    </View>
                </ImageBackground>
            </View>
        </>

    )
}

export default NameInput;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'AlegreyaTitre',
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    nameInput: {
        fontSize: 32,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        color: 'black',
        fontFamily: 'AlegreyaTitre',
        textAlign: 'center',
        right: '11%',
        bottom: '45%'
    },
    buttonContainer: {
        position: 'absolute',
        left: '64%',
        bottom: '12%',
    },
    title: {
        fontFamily: 'AlegreyaTitre',
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        marginBottom: '10%'
    },
    bigContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2%'
    },
    imageTitreContainer: {
        paddingTop: 10,
        height: 140,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
    },
})