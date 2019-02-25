const stylelint = require("stylelint");
require("colors");

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
                console.log("linter found several issues".blue)
                console.log(data.output.blue);
            } else {
                console.log("linter found no issues".green)
            }
        })
        .catch(function(err) {
            // do things with err e.g.
            console.error(err.stack.red);
        });
}

module.exports = { lintStyles };
