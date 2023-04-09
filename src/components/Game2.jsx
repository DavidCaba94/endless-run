import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine'
import entities from '../entities/flappybird'
import Physics from '../utils/physics'
import { Link } from 'react-router-native'

const Game2 = () => {
    const [running, setRunning] = useState(false)
    const [gameEngine, setGameEngine] = useState(null)
    const [currentPoints, setCurrentPoints] = useState(0)
    useEffect(() => {
        setRunning(false)
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', margin: 20 }}>{currentPoints}</Text>
            <GameEngine
                ref={(ref) => { setGameEngine(ref) }}
                systems={[Physics]}
                entities={entities()}
                running={running}
                onEvent={(e) => {
                switch (e.type) {
                    case 'game_over':
                    setRunning(false)
                    gameEngine.stop()
                    break;
                    case 'new_point':
                    setCurrentPoints(currentPoints + 1)
                    break;
                }
                }}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                <StatusBar style="auto" hidden={true} />

            </GameEngine>

            {!running ?
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                    setCurrentPoints(0)
                    setRunning(true)
                    gameEngine.swap(entities())
                    }}>
                    <Text style={styles.textButton}>
                    START GAME
                    </Text>
                </TouchableOpacity>
                <Link to={'/'} style={styles.button}>
                    <Text style={styles.textButton}>
                    HOME
                    </Text>
                </Link>
                <Link to={'/top'} style={styles.button}>
                    <Text style={styles.textButton}>
                    TOP
                    </Text>
                </Link>
            </View> : null}
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    button: {
        width: 170,
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
        position: 'absolute',
        width: 50,
        height: 50,
        marginLeft: 200,
        marginTop: 500
    }
})

export default Game2