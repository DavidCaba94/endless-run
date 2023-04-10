import Matter from "matter-js";
import { getPowerUpPosition } from "./random-powerups";
import { getObstaclePosition } from "./random-obstacle";
import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

let entitiesObject = null
let timeTicks = 0

const Physics = (entities, { touches, time, events, dispatch }) => {
    let engine = entities.physics.engine
    entitiesObject = entities
    
    Matter.Engine.update(engine, time.delta)
    if (timeTicks === 10) {
        dispatch({ type: 'new_point' })
        timeTicks = 0
    }
    timeTicks ++;

    if (entities['PowerUp'].body.bounds.max.y >= windowHeight && itsTimeToPower()) {
        const powerupPos = getPowerUpPosition(0);
        console.log(powerupPos)

        Matter.Body.setPosition(entities['PowerUp'].body, { x: powerupPos.pos.x, y: powerupPos.pos.y })
    }

    if (entities['Obstacle'].body.bounds.max.y >= windowHeight && itsTimeToObstacle()) {
        const obstaclePos = getObstaclePosition(0);
        console.log(obstaclePos)

        Matter.Body.setPosition(entities['Obstacle'].body, { x: obstaclePos.pos.x, y: obstaclePos.pos.y })
    }

    Matter.Body.translate(entities['PowerUp'].body, { x: 0, y: +5 })
    Matter.Body.translate(entities['Obstacle'].body, { x: 0, y: +5 })

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

function itsTimeToPower() {
    let itsTime = false
    if (Math.floor(Math.random() * (0, 1000 + 1) + 0) === 777) {
        itsTime = true
    }

    return itsTime
}

function itsTimeToObstacle() {
    let itsTime = false
    if (Math.floor(Math.random() * (0, 1000 + 1) + 0) % 100 === 0) {
        itsTime = true
    }

    return itsTime
}

export default Physics