const sass = require("node-sass");
const fs = require("fs");

const log = require("./logging.js");
const {
    styles: { outFilePath, inFilePath }
} = require("./_config");

const outFileMapPath = outFilePath + ".map";

function deleteFilesIfExist() {
    if (fs.existsSync(outFilePath)) {
        fs.unlinkSync(outFilePath);
    }

    if (fs.existsSync(outFileMapPath)) {
        fs.unlinkSync(outFileMapPath);
    }
}

function createFiles() {
    fs.closeSync(fs.openSync(outFilePath, "w"));
    fs.closeSync(fs.openSync(outFileMapPath, "w"));
}

function compileSassAsync(resolve, reject) {
    deleteFilesIfExist();
    createFiles();

    sass.render(
        {
            file: inFilePath,
            sourceMap: true,
            sourceMapEmbed: true,
            outFile: outFilePath
        },
        (error, result) => {
            if (error) {
                log.logError(error.formatted);
                reject();
            }

            if (!result || !result.css) {
                log.logError("the result of sass compilation is empty.");
                reject();
            }

            try {
                fs.writeFileSync(outFilePath, result.css);
                fs.writeFileSync(outFileMapPath, result.map);
            } catch (error) {
                if (error) {
                    log.logError(JSON.stringify(error));
                }
                reject();
            }

            log.logSuccess("sass has been successfully built.");
            resolve();
        }
    );
}

const compileSassAsyncFunc = () => compileSassAsync(() => {}, () => {});

module.exports = {
    compileSassAsync: new Promise(compileSassAsync),
    compileSassAsyncFunc
};
