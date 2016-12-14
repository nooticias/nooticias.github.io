module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        frontend_path: "./",
        dist_path:     "./_site/",
        bower_path:    "./bower_components/",

        assets_relative_path: "",
        js_relative_path:     "<%= assets_relative_path %>js/",
        css_relative_path:    "<%= assets_relative_path %>css/",
        less_relative_path:   "<%= assets_relative_path %>less/",

        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    '<%= dist_path %>/<%= css_relative_path %>/style.min.css': '<%= frontend_path %>/<%= less_relative_path %>/style.less'
                }
            }
        },

        uglify: {
            production: {
                src: ['<%= frontend_path %>/<%= js_relative_path %>/script.js'],
                dest: '<%= dist_path %>/<%= js_relative_path %>/script.min.js'
            }
        },

        htmlmin: {
            production: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= dist_path %>/',
                    src: ['**/*.{html,xml}'],
                    dest: '<%= dist_path %>/'
                }]
            }
        },

        jshint: {
            files: ['<%= frontend_path %>/<%= js_relative_path %>/**/*.js'],
            options: {
                globals: {
                    console: true
                }
            }
        },

        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                title: 'Grunt task manager',
                success: true,
                duration: 2
            }
        },

        watch: {
            dist: {
                files: [
                    '<%= frontend_path %>/**/*'
                ],
                tasks: ['default'],
                options: {
                    livereload: true,
                }
            }
        },

        exec: {
            jekyll: {
                options: {
                    maxBuffer: 5000*1024
                },
                command: 'bundle exec jekyll build --trace --verbose --incremental'
            }
        },

        env: {
            development: {
                JEKYLL_SITE_URL: 'http://127.0.0.1:8080'
            },
            production: {
                JEKYLL_SITE_URL: 'http://www.nooticias.com.br'
            }
        },

        clean: {
            dist: [
                '<%= dist_path %>/<%= css_relative_path %>/',
                '<%= dist_path %>/<%= js_relative_path %>/'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('essential', [
        'exec',
        'clean',
        'jshint',
        'less',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'env:development',
        'essential',
        'notify_hooks'
    ]);

    grunt.registerTask('production', [
        'env:production',
        'essential',
        'htmlmin',
        'notify_hooks'
    ]);

    grunt.registerTask('w', ['watch']);
};
