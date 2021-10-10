module.exports = global.StandartResponse = function StandardResponse(status, message, data= {}) {
    return {
        status: status,
        message: message,
        data: data
    }
}