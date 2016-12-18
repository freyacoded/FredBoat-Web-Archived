module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.initConfig({
        babel: {
            options: {
                plugins: ['transform-react-jsx'],
                presets: ['es2016', 'react']
            },
            jsx: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.jsx'],
                    dest: 'dist/',
                    ext: '.js'
                }]
            }
        },
        webpack: {
            fredboat: {
                // webpack options
                entry: "./dist/index.js",
                output: {
                    path: "asserts/",
                    filename: "[hash].js",
                },

                stats: {
                    // Configure the console output
                    colors: false,
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

            }
        },
        env: {
            dev: {
                NODE_ENV : 'development',
            },
            prod: {
                NODE_ENV : 'production',
            }
        }
    });

    grunt.registerTask('default', ['env:dev','babel', 'webpack:fredboat']);
    grunt.registerTask('build', ['env:prod','babel', 'webpack:fredboat']);
};
