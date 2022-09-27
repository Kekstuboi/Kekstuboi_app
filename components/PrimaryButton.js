import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.buttonIOS]: styles.buttonInnerContainer} 
            onPress={onPress} 
            android_ripple={{ color: 'darkpurple' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable >
        </View>
    );
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        borderWidth: 4,
        borderColor: '#614b39',
        overflow: 'hidden',
        paddingHorizontal: '1%'
    },
    buttonInnerContainer: {
        backgroundColor: '#a88e6b',
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',

    },
    buttonIOS: {
        opacity: 0.75,

    }

});