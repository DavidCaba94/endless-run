import Matter from "matter-js"
import Runner from "../enviroment/endless-run/Runner";
import PowerUp from "../enviroment/endless-run/PowerUp";
import Obstacle from "../enviroment/endless-run/Obstacle";
import { getPowerUpPosition } from "../utils/random-powerups";
import { getObstaclePosition } from "../utils/random-obstacle";

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.gravity.y = 0

    const powerupPos = getPowerUpPosition(0)
    const obstaclePos = getObstaclePosition(0)

    return {
        physics: { engine, world },

        Runner: Runner(world, 'green', { x: windowWidth / 2, y: (windowHeight / 2) + 100 }, { height: 40, width: 40 }),
        PowerUp: PowerUp(world, 'cyan', { x: powerupPos.pos.x, y: powerupPos.pos.y }, { height: 40, width: 40 }),
        Obstacle: Obstacle(world, 'red', { x: obstaclePos.pos.x, y: obstaclePos.pos.y }, { height: 40, width: 40 })
    }
}