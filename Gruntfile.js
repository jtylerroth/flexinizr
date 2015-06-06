module.exports = function (grunt) {

    grunt.initConfig({
        //Compile Sass
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'src/compiled/flexinizr-pre.css': ['src/flexinizr.scss']
                }
            }
        },
        // Concatenate css
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/flexinizr.min.css': ['src/compiled/flexinizr.css']
                }
            }
        },
        //Watch changes
        watch: {
            css: {
                files: ['src/flexinizr.scss'],
                tasks: ['default']
            }
        },
        //Copy unminified to dist
        copy: {
            main: {
                files: [
                    {expand: false, src: 'src/compiled/flexinizr.css', dest: 'dist/flexinizr.css'}
                ]
            }
        },
        //perform post tasks
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({browsers: ['last 1 version'], cascade: true})]
            },
            dist: {
                src: 'src/compiled/flexinizr-pre.css',
                dest: 'src/compiled/flexinizr.css'
            }
        }
    });


    // Load
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-postcss');


    // Register
    grunt.registerTask('default', ['sass', 'postcss', 'copy', 'cssmin']);

};