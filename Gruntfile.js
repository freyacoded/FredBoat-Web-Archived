module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-copy');

    var webpackConfig = require("./webpack.config.js");

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
            fredboat: webpackConfig
        },
        "webpack-dev-server": {
            fredboat: webpackConfig
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

    grunt.registerTask('default', ['env:dev', 'webpack:fredboat']);
    grunt.registerTask('start', ['env:dev', 'webpack-dev-server:fredboat']);
};
