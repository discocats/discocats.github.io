require("colors");

function logSuccess(message) {
    if (message) {
        console.log(message.green);
    }
}

function logError(message) {
    if (message) {
        console.log(message.red);
    }
}

function logInfo(message) {
    if (message) {
        console.log(message.blue);
    }
}

module.exports = {
    logSuccess,
    logError,
    logInfo
};
