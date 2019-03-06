const config = {
    styles: {
        outFilePath: "./dist/styles/index.css",
        inFilePath: "./src/styles/index.scss",
        allSrcFiles: "./src/styles/**/*.scss",
    },
    html: {
        outFilePath: "./index.html",
    },
    scripts: {
        outFilePath: "./dist/js/index.js",
        outFileName: "index.js",
        outDirPath: "./dist/js",
        inFilePath: "./src/scripts/index.tsx",
        inDirPath: "./src/scripts",
    }
};

module.exports = config;
