import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Top from './Top.jsx'
import Home from './Home.jsx'
import { Route, Routes } from 'react-router-native'
import Game from './Game.jsx'
import Game2 from './Game2.jsx'

const Main = () => {
    return (
        <View style={styles.container}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/top' element={<Top />} />
                <Route path='/game' element={<Game />} />
                <Route path='/game2' element={<Game2 />} />
            </Routes>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        backgroundColor: '#c2c2c2',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Main