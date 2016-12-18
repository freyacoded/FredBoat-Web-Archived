module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-env');

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
