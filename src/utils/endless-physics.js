import Matter from "matter-js";

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

let entitiesObject = null

const Physics = (entities, { touches, time, events, dispatch }) => {
    let engine = entities.physics.engine
    entitiesObject = entities
    
    Matter.Engine.update(engine, time.delta)

    Matter.Events.on(engine, 'collisionStart', (event) => {
        dispatch({ type: 'game_over' })
    })

    return entities;
}

export const moveRight = () => {
    if (entitiesObject.Runner.body.position.x + windowWidth / 5 < windowWidth) {
        Matter.Body.setPosition(entitiesObject.Runner.body, {
            x: entitiesObject.Runner.body.position.x + windowWidth / 5,
            y: entitiesObject.Runner.body.position.y
        })
    }
}

export const moveLeft = () => {
    if (entitiesObject.Runner.body.position.x - windowWidth / 5 > 0) {
        Matter.Body.setPosition(entitiesObject.Runner.body, {
            x: entitiesObject.Runner.body.position.x - windowWidth / 5,
            y: entitiesObject.Runner.body.position.y
        })
    }
}

export default Physics