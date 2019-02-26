const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const fs = require("fs");
require("colors");

function logErrorIfAny(err) {
    if (err) {
        console.log(err.red);
    }
}

const {
    styles: { outFilePath }
} = require("./_config");

const configuredCssNano = cssnano({
    calc: true,
    colormin: true,
    discardComments: {
        removeAll: true
    },
    discardEmpty: true,
    discardDuplicates: true,
    discardOverridden: true,
    normalizeCharset: true,
    mergeLonghand: true,
    mergeRules: true,
    minifyFontValues: true,
    minifyParams: true,
    orderedValues: true,
    uniqueSelectors: true,
    safe: true
});

const compiledSass = fs.readFileSync(outFilePath, "utf8");

function performPostcssStep() {
    postcss([autoprefixer, configuredCssNano])
        .process(compiledSass, { from: outFilePath, to: outFilePath })
        .then(result => {
            fs.writeFile(outFilePath, result.css, logErrorIfAny);

            console.log("postcss finished".green);
        })
        .catch(error => {
            console.log("an error ocurred".red);
            console.log(error.red);
        });
}

module.exports = { performPostcssStep };
