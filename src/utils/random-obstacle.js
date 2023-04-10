import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getObstaclePosition = (addToPosX = 0) => {
    let xPosTop = getRandom(1, 5)

    const obstacle = { pos: { x: ((windowWidth / 5) * xPosTop) - 40, y: 0 }, size: { height: 40, width: 40 } }

    return obstacle
}