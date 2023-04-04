import React from "react"
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Top from './Top.jsx'

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Main</Text>
            <Top />
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        width: '100%',
        marginTop: Constants.statusBarHeight,
        padding: 10
    }
})

export default Main