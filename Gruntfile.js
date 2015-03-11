module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      html: {
        files: [{
          expand: true,
          cwd: './',
          src: ['*.html'],
          dest: 'production/'
        }]
      },
    },
    clean: {
      build: ['build/'],
      production: ['production/']

    },
    useminPrepare: {
      html: [
        'production/index.html'
      ],
      options: {
        root: './',
        dest: 'production/'
      }
    },
    filerev: {
      production: {
        src: 'production/**/*.{css,js}'
      }
    },
    usemin: {
      html: [
        'production/index.html'
      ]
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-usemin')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-filerev')

  grunt.registerTask('build', [
    'clean',
    'copy',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin'
  ])
}