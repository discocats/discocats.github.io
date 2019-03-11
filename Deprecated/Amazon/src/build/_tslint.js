const tslint = require("tslint");
const glob = require("glob");
const fs = require("fs-extra");

const log = require("./logging.js");
const {
    scripts: { inDirPath }
} = require("./_config");

function lintTypescript() {
    const options = {
        fix: false,
        formatter: "stylish",
        formattersDirectory: null,
        rulesDirectory: null
    };

    const linter = new tslint.Linter(options);

    const filePaths = glob.sync(inDirPath + "/**/*.ts?(x)");

    const filesWithErrors = [];
    filePaths.forEach(path => {
        const fileContents = fs.readFileSync(path, "utf8");

        const configuration = tslint.Configuration.findConfiguration("./tslint.json", path).results;

        linter.lint(path, fileContents, configuration);
        const result = linter.getResult();

        if (result.errorCount > 0) {
            filesWithErrors.push({
                path,
                errorsCount: result.errorCount
            });

            log.logError(result.output);
        }

        linter.failures = [];
        linter.fixes = [];
    });

    
    if (filesWithErrors.length === 0) {
        log.logSuccess("Typescript linter check found no errors!");
    }
}

module.exports = { lintTypescript };
