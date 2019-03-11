const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const fs = require("fs");

const log = require("./logging.js");
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

function performPostcssStep() {
    const compiledSass = fs.readFileSync(outFilePath, "utf8");

    postcss([autoprefixer, configuredCssNano])
        .process(compiledSass, { from: outFilePath, to: outFilePath })
        .then(result => {
            fs.writeFile(outFilePath, result.css, log.logError);

            log.logSuccess("postcss finished");
        })
        .catch(error => {
            log.logError("an error ocurred");
            log.logError(JSON.stringify(error));
        });
}

module.exports = { performPostcssStep };
