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
            console.log(data.output.green);
        })
        .catch(function(err) {
            // do things with err e.g.
            console.error(err.stack.red);
        });
}

module.exports = { lintStyles };
