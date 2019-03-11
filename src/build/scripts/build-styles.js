const { performPostcssStep } = require("../_post.js");
const { compileSassAsync } = require("../_sass");

compileSassAsync.then(performPostcssStep);