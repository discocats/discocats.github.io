const babel = require("@babel/core");
const fs = require("fs");

const {scripts: {outFilePath, inFilePath}} = require("./_config");

function runBabel() {
    babel.transformFile(
        inFilePath,
        {
            sourceMaps: true,
            presets: [
                [
                    "@babel/preset-env"
                ]
            ],

        },
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

            fs.writeFile(outFilePath, result.code);
            fs.writeFile(outFilePath + ".map", JSON.stringify(result.map));
        }
    );
}

module.exports = {
    runBabel,
};