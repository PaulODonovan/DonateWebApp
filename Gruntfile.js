module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    karma: {
      auto: {
<<<<<<< HEAD
	configFile: 'test/karma.conf.js'
      },
      unit: {
	configFile: 'test/karma.conf.js',
	singleRun: true
=======
        configFile: 'test/karma.conf.js'
      },
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
>>>>>>> 40dc066702148240d46d84f6c15203d8e58bc81e
      }
    }

  });

  grunt.registerTask('test', ['karma:auto']);
  grunt.registerTask('unit', ['karma:unit']);

};
