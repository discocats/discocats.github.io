const sass = require("node-sass");
const fs = require("fs");

const log = require("./logging.js");
const {styles: {outFilePath, inFilePath}} = require("./_config");

function compileSassAsync(resolve, reject) {
    sass.render(
        {
            file: inFilePath,
            sourceMap: true,
            sourceMapEmbed: true,
            outFile: outFilePath
        },
        (error, result) => {
            if (error) {
                log.logError(error.formatted)
                
                reject();
            }

            if (!result || !result.css) {
                log.logError("result is empty");

                reject();
            }

            fs.writeFile(outFilePath, result.css, log.logError);
            fs.writeFile(outFilePath + ".map", result.map, log.logError);

            log.logSuccess("sass has been successfully built.");

            resolve();
        }
    );
}

const compileSassAsyncFunc = () => compileSassAsync(
    () => {},
    () => {}
);

module.exports = {
    compileSassAsync: new Promise(compileSassAsync),
    compileSassAsyncFunc,
}