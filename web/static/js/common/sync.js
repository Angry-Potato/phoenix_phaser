export const syncPosition = (sprite, channel, event) => {
  event.add(sprite => sendPosition(sprite, channel))
  receivePosition(sprite, channel)
}

export const sendPosition = (sprite, channel) => {
    const message = serializePosition(sprite)
    console.log("Sending message", message)
    channel.push("position", message)
}

export const receivePosition = (sprite, channel) => {
    const callback = (message) => {
        console.log("Received message", message)
        const {x,y} = message
        sprite.position.setTo(x, y)
    }
    channel.on("position", callback)
}

export const serializePosition = ({x, y}) => Object.assign({x, y})