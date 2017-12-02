var path = require("path");

module.exports = {
    context: path.resolve(""),
    entry: "./app",
    output: {
        path: path.resolve("build/"),
        publicPath: "/",
        filename: "bundle.js"
    },
    watch: true,
    plugins: [],
    module: { },
    resolve: {
        extensions: [".js"]
    }
}