module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-env');

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/index.jsx": "src/index.jsx"
                }
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

    grunt.registerTask('default', ['env:dev','babel']);
    grunt.registerTask('build', ['env:prod','babel']);
};
