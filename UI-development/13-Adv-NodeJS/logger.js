function logInfo(message) {
    console.log("INFO :", message);
}
function logError(message)  {
    console.log("ERROR :",message);
}
module.exports = {
    logInfo,
    logError
};