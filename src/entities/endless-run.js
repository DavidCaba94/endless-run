import Matter from "matter-js"
import Runner from "../enviroment/endless-run/Runner";

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.gravity.y = 0;

    return {
        physics: { engine, world },

        Runner: Runner(world, 'green', { x: windowWidth / 2, y: (windowHeight / 2) + 100 }, { height: 40, width: 40 }),
    }
}