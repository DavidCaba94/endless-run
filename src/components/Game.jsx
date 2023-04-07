import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

const Game = () => {
    return (
        <View style={styles.container}>
            <Link to={'/'}>
                <Text>Home</Text>
            </Link>
            <Link to={'/top'}>
                <Text>Top</Text>
            </Link>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    }
})

export default Game