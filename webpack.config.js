module.exports = {
    // webpack options
    entry: {
        "bundle.js": "./src/script/index.jsx"
    },
    output: {
        path: "asserts/",
        filename: "[name]",
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
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css"
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            // "url" loader works just like "file" loader but it also embeds
            // assets smaller than specified size as data URLs to avoid requests.
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    }
};