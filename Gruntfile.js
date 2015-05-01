module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },
    watch: {
      files: ['<%= jshint.all %>'],
      tasks: ['jshint']
    },
    protractor: {
      options: {
        configFile: "node_modules/protractor/example/conf.js", // Default config file 
        keepAlive: true, // If false, the grunt process stops when the test fails. 
        noColor: false, // If true, protractor will not use colors in its output. 
        args: {
          // Arguments passed to the command 
        }
      },
      your_target: {   all: {},
        options: {
          configFile: "test/e2e/conf.js", // Target-specific config file 
          args: {} // Target-specific arguments 
        }
      },
    },
    protractor_webdriver: {

    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-protractor-webdriver');

  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['jshint']);

  // grunt.registerTask('default', ['watch']);


};