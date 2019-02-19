const sass = require("node-sass");
const fs = require("fs");
require("colors");

/*
    Путь идет от корня
*/

const outFilePath = "./dist/styles/index.css";
const inFilePath = "./src/styles/index.scss";

function compileSassAsync() {
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
                return;
            }

            if (!result || !result.css) {
                console.log("result is empty".red);
                return;
            }

            fs.writeFile(outFilePath, result.css, err => {
                if (err) {
                    console.log(err.red);
                }
            });
            fs.writeFile(outFilePath + ".map", result.map, err => {
                if (err) {
                    console.log(err.red);
                }
            });

            console.log("sass has been successfully built.".green);
        }
    );
}

module.exports = {
    compileSassAsync,
}