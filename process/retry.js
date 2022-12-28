async function retryable(cb, retryTime) {
    let retryCounter = 0
    let returnValue = null
    let errors = []
    while (retryCounter < retryTime) {
        try {
            returnValue = await cb()
            break;
        } catch (error) {
            errors.push(error.message)
            retryCounter++
        }
    }

    if (errors.length) {
        throw Error(errors.toString())
    }
    
    return returnValue
}

