const babel = require("@babel/core");
const fs = require("fs");

const log = require("./logging.js");
const {scripts: {outFilePath, inFilePath}} = require("./_config");

function runBabel() {
    babel.transformFile(
        inFilePath,
        undefined,
        (err, result) => {
            if (err) {
                log.logError(JSON.stringify(err));
                return;
            }

            fs.writeFile(outFilePath, result.code, log.logError);
            fs.writeFile(outFilePath + ".map", JSON.stringify(result.map), log.logError);

            log.logSuccess("babel built successfully");
        }
    );
}

module.exports = {
    runBabel,
};