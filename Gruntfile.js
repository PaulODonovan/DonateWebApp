module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    karma: {
      auto: {
	configFile: 'test/karma.conf.js'
      },
      unit: {
	configFile: 'test/karma.conf.js',
	singleRun: true
      }
    }

  });
  grunt.registerTask('default', ['karma']);
  grunt.registerTask('test', ['karma:auto']);
  grunt.registerTask('unit', ['karma:unit']);

};
