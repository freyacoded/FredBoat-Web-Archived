module.exports = {
    // webpack options
    entry: "./src/index.jsx",
    output: {
        path: "asserts/",
        filename: "[hash].js",
    },

    stats: {
        // Configure the console output
        colors: true,
        modules: true,
        reasons: true
    },
    // stats: false disables the stats output

    storeStatsTo: "xyz", // writes the status to a variable named xyz
    // you may use it later in grunt i.e. <%= xyz.hash %>

    progress: false, // Don't show progress
    // Defaults to true

    failOnError: false, // don't report error to grunt if webpack find errors
    // Use this if webpack errors are tolerable and grunt should continue

    watch: true, // use webpacks watcher
    // You need to keep the grunt process alive

    watchOptions: {
        aggregateTimeout: 500,
        poll: true
    },
    // Use this when you need to fallback to poll based watching (webpack 1.9.1+ only)

    keepalive: true, // don't finish the grunt task
    // defaults to true for watch and dev-server otherwise false

    inline: true,  // embed the webpack-dev-server runtime into the bundle
    // Defaults to false

    hot: true, // adds the HotModuleReplacementPlugin and switch the server to hot mode
    // Use this in combination with the inline option

    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};