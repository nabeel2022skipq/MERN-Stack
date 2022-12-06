export const returnError = (msg, status, id = null) => {
    return {
        type: "RETURN_ERRORS",
        payload: { msg, status, id }
    }
}

export const clearErrors = () => {
    return {
        type: "CLEAR_ERRORS"
    }
}