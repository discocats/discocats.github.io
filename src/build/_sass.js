const sass = require("node-sass");
const fs = require("fs");
require("colors");

const {styles: {outFilePath, inFilePath}} = require("./_config");

function logErrorIfAny(err) {
    if (err) {
        console.log(err.red);
    }
}

function compileSassAsync(resolve, reject) {
    sass.render(
        {
            file: inFilePath,
            sourceMap: true,
            sourceMapEmbed: true,
            outFile: outFilePath
        },
        (err, result) => {
            if (err) {
                console.log(err.red);
                reject();
            }

            if (!result || !result.css) {
                console.log("result is empty".red);
                reject();
            }

            fs.writeFile(outFilePath, result.css, logErrorIfAny);
            fs.writeFile(outFilePath + ".map", result.map, logErrorIfAny);

            console.log("sass has been successfully built.".green);

            resolve();
        }
    );
}

module.exports = {
    compileSassAsync: new Promise(compileSassAsync),
}