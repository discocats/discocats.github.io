const bsServer = require("browser-sync").create("My server");
const bsProxy = require("browser-sync").create("My proxy server");
require("colors");

const { compileSassAsync } = require("./_sass");
const {
    styles: { outFilePath: stylesOutPath, allSrcFiles: allStylesSrcFiles },
    html: { outFilePath: htmlOutPath }
} = require("./_config");

// reload 'localhost:3005' when dist css or html changes
function startProxy() {
    bsProxy.init(
        {
            watchOptions: {
                awaitWriteFinish: {
                    stabilityThreshold: 700,
                    pollInterval: 100
                }
            },
            proxy: "localhost:3005",
            port: 3004,
            injectChanges: true,
            files: [stylesOutPath, htmlOutPath]
        },
        () => console.log("Proxy server initiated.\n".green)
    );
}

function runServerAndProxy() {
    // run compileSassAsync when sass changes
    bsProxy.watch([allStylesSrcFiles]).on("change", compileSassAsync);

    bsServer.init(
        {
            server: "./",
            port: 3005,
            ui: false,
            online: false,
            open: false
        },
        () => {}
    );

    bsServer.emitter.on("init", () => {
        console.log("Server initiated.\n".green);
        startProxy();
    });
}

module.exports = {
    runServerAndProxy
};
