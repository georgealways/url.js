module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        files: {
          'url.min.js': ['url.js']
        }
      }
    },
    jasmine : {
      pivotal: {
        src: 'url.min.js',
        options: {
          specs: 'test.js',
        }
      }
    },
    watch: {
      files: ['url.js', 'test.js'],
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['uglify', 'jasmine']);

};