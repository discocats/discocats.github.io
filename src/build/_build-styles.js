const { performPostcssStep } = require("./_post.js");
const { compileSassAsync } = require("./_sass");

module.exports = {
    buildStyles: () => compileSassAsync.then(performPostcssStep)
};
