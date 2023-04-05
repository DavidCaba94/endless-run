import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import top from '../../data/top.js'
import { Link } from 'react-router-native'

const Top = () => {
    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <Text style={styles.topText}>TOP 10</Text>
                {
                    top.map(user => (
                        <View key={user.id} style={styles.card}>
                            <Text>#{user.id}</Text>
                            <Text style={styles.name}>{user.name}</Text>
                            <Text>{user.points}</Text>
                        </View>
                    ))
                }
            </View>
            <Text style={styles.topText}>Tu</Text>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text>#64223</Text>
                    <Text style={styles.name}>David</Text>
                    <Text>345</Text>
                </View>
            </View>
            <Link to={'/'}>
                <Text>Home</Text>
            </Link>
        </View>
    )
}

const styles =  StyleSheet.create({
    view: {
        marginTop: Constants.statusBarHeight,
    },
    container: {
        width: '70%',
        margin: 'auto',
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#20232a',
        padding: 10
    },
    card: {
        width: '100%',
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#e7e7e7',
        borderRadius: 5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#20232a',
        justifyContent: 'space-between'
    },
    name: {
        color: '#5d27df'
    },
    topText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#5d27df',
        fontWeight: 'bold'
    }
})

export default Top