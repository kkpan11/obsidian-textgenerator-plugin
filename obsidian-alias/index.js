
const alias = require("esbuild-plugin-alias");
const path = require("path");

module.exports = function ObsidianAliasPlugin() {
    return alias({
        'fs': path.resolve(__dirname, `./fs.js`),
        'fs-extra': path.resolve(__dirname, `./fs.js`),
        'fs/promises': path.resolve(__dirname, `./fsPromises.js`),
        'path': path.resolve(__dirname, `./path.js`),
        'node-fetch': path.resolve(__dirname, `./node-fetch.js`),
        "process": path.resolve(__dirname, `./process.js`),
        "node:events": path.resolve(__dirname, `./events.js`),
        "node:process": path.resolve(__dirname, `./process.js`),
        "node:util": path.resolve(__dirname, `./util.js`),
    })
}