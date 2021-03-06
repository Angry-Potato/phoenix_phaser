export const joinChannel = (channel, success, failure, timeout) => {
    channel
        .join()
        .receive("ok", success || joinOk)
        .receive("error", failure || joinError)
        .receive("timeout", timeout || joinTimeout)
    return channel
}

const joinOk = (response) => console.log("Joined successfully", response)
const joinError = (response) => console.log("Failed to join channel", response)
const joinTimeout = () => console.log("Network issue, still waiting..")

export const leaveChannel = (channel, callback) => {
  console.log(`leaving ${channel.topic} channel`)
  // Ok I dont have time to debug this right now, however this does stop
  // the bug from occurring. There is intermitted situation when the attempt
  // to leave the channel results in a ...... error.
  channel.timeout = 10 // dirty hack sorry!!!
  channel.leave().receive("ok", callback)
}