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
                            <Text style={styles.orderNumber}>#{user.id}</Text>
                            <Text style={styles.name}>{user.name}</Text>
                            <Text style={styles.points}>{user.points}</Text>
                        </View>
                    ))
                }
            </View>
            <Text style={styles.topText}>Tu</Text>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.orderNumberPersonal}>#64223</Text>
                    <Text style={styles.namePersonal}>David</Text>
                    <Text style={styles.points}>345</Text>
                </View>
            </View>
            <Link to={'/'} style={styles.button}>
                <Text style={styles.textButton}>HOME</Text>
            </Link>
        </View>
    )
}

const styles =  StyleSheet.create({
    view: {
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: 310,
        margin: 'auto',
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#20232a',
        padding: 10
    },
    card: {
        width: 290,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#e7e7e7',
        borderRadius: 5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#20232a',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    name: {
        width: 180,
        color: '#5d27df'
    },
    namePersonal: {
        width: 160,
        color: '#5d27df'
    },
    topText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#5d27df',
        fontWeight: 'bold'
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
        marginTop: 20
    },
    textButton: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    orderNumber: {
        width: 35
    },
    orderNumberPersonal: {
        width: 55
    },
    points: {
        width: 60,
        textAlign: 'right'
    }
})

export default Top