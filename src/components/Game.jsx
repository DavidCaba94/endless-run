import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine'
import entities from '../entities/endless-run'
import Physics, { moveRight, moveLeft } from '../utils/endless-physics'
import { Link } from 'react-router-native'

const windowWidth = Dimensions.get('window').width

const Game = () => {
    const [running, setRunning] = useState(false)
    const [gameEngine, setGameEngine] = useState(null)
    const [currentPoints, setCurrentPoints] = useState(0)
    useEffect(() => {
        setRunning(false)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.currentPoints}>{currentPoints}</Text>
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
                        case 'move_right':
                        moveRight()
                        return;
                        case 'move_left':
                        moveLeft()
                        return;
                    }
                }}
                style={styles.gameEngine}
                >
                <StatusBar style="auto" hidden={true} />

            </GameEngine>
            <View style={styles.controlContainer}>
                <TouchableOpacity onPress={() => gameEngine.dispatch({ type: 'move_left' })}>
                    <View style={styles.controlBtnLeft} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => gameEngine.dispatch({ type: 'move_right' })}>
                    <View style={styles.controlBtnRight} />
                </TouchableOpacity>
            </View>

            {!running ?
            <View style={styles.buttonsContainer}>
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
        flex: 1,
        width: '100%',
        height: '100%'
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    gameEngine: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    currentPoints: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        margin: 20
    },
    controlBtnLeft: {
        backgroundColor: "#ffff0000",
        width: windowWidth / 2,
        height: '100%',
    },
    controlBtnRight: {
        backgroundColor: "#ff00ff00",
        width: windowWidth / 2,
        height: '100%',
    },
    controlContainer: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
})

export default Game