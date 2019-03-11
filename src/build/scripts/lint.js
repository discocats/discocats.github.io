const { lintStyles } = require("../_style-lint.js");
const { lintTypescript } = require("../_tslint.js");

lintStyles();
lintTypescript();
