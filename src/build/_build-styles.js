const { performPostcssStep } = require("./_post.js");
const { compileSassAsync } = require("./_sass");
const log = require("./logging.js");

module.exports = {
    buildStyles: () => {
        compileSassAsync()
        .then(performPostcssStep)
        .catch(e => log.logError("error during build styles ocurred."));
    }
};
