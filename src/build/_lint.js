const stylelint = require("stylelint");

const log = require("./logging.js");
const {
    styles: { allSrcFiles }
} = require("./_config");

function lintStyles() {
    stylelint
        .lint({
            files: allSrcFiles,
            formatter: "compact"
        })
        .then(function(data) {
            if (data.output) {
                log.logInfo("linter found several issues");
                log.logInfo(data.output);
            } else {
                log.logSuccess("linter found no issues");
            }
        })
        .catch(function(err) {
            log.logError(err);
        });
}

module.exports = { lintStyles };
