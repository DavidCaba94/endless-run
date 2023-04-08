import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, PixelRatio, Image } from 'react-native'
import { Link } from 'react-router-native'
import Canvas from 'react-native-canvas';

let intervalId = [];

const Game = () => {
    const ref = useRef(null);
    const position = 0;
    const squares = [
        { x: 0, y: 0, color: 'white'},
        { x: 100, y: 0, color: 'red'},
        { x: 200, y: 0, color: 'blue'}
    ];

    useEffect(() => {
        if (ref.current) {
            const ctx = ref.current.getContext('2d');
            const width = Dimensions.get('window').width;
            const height = Dimensions.get('window').height;
            ref.current.width = PixelRatio.getPixelSizeForLayoutSize(width);
            ref.current.height = PixelRatio.getPixelSizeForLayoutSize(height);
            if (ctx) {
                draw(ctx, position);
            }
        }
    }, [ref]);

    const draw = (ctx, position) => {
        squares.forEach((sq, index) => {
            intervalId[index] = setInterval(function(){
                position++;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.fillStyle = sq.color;
                ctx.fillRect(sq.x, sq.y + position, 50, 50);
                console.log(position);
            }, 100);
        });
    };
    
    const stopInterval = () => {
        intervalId.forEach(element => {
            clearInterval(element);
        });
    }
    
    return (
        <View style={styles.container}>
            <Canvas ref={ref} style={styles.canvas} />
            <Image source={require('../../assets/favicon.png')} style={styles.image}/>
            <View style={styles.bottomButtonsContainer}>
                <Link to={'/'} style={styles.bottomButton} onPress={() => {stopInterval()}}>
                    <Text style={styles.textButton}>Home</Text>
                </Link>
                <Link to={'/top'} style={styles.bottomButton}>
                    <Text style={styles.textButton}>Top</Text>
                </Link>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    canvas: { 
        width: '100%',
        height: '92%',
        backgroundColor: 'green'
    },
    bottomButtonsContainer: {
        width: '100%',
        height: '8%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bottomButton: {
        width: 100,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#0000ff',
        marginLeft: 5
    },
    textButton: {
        width: '100%',
        textAlign: 'center',
        color: '#ffffff'
    },
    image: {
        position: 'absolute',
        width: 50,
        height: 50,
        marginLeft: 200,
        marginTop: 500
    }
})

export default Game