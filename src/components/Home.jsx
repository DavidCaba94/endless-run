import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/favicon.png')} style={styles.image}/>
            <Link to={'/game'} style={styles.button}>
                <Text style={styles.textButton}>PLAY</Text>
            </Link>
            <Link to={'/top'} style={styles.button}>
                <Text style={styles.textButton}>TOP</Text>
            </Link>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 150,
        backgroundColor: '#0378ff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 4,
        borderColor: '#ffffff',
        textAlign: 'center',
        margin: 'auto',
        marginTop: 10
    },
    textButton: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    image: {
        width: 150,
        height: 150,
        margin: 'auto'
    }
})

export default Home