module.exports = function(grunt) {
 grunt.initConfig({
	watch: {
      stylesheets: {
        files: ['assets/**/*.css', 'assets/**/*.scss'],
        tasks: ['sass', 'concat', 'cssmin']
      },
      
      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'uglify']
      }
    },
	sass: {                             
		dist: {                         
		  options: {                    
			style: 'expanded'
		  },
		  files: {                      
			'assets/css/src/style.css': 'assets/sass/style.scss',    
			'assets/css/src/m.style.css': 'assets/sass/m.style.scss'
		  }
		}
	  },
    concat: {
        mobile: {
           src: [
              'assets/css/src/reset.css',
			  'assets/css/src/m.style.css',
           ],
           dest: 'assets/css/src/all/m.style.all.css'
        },
        website: {
           src: [
              'assets/css/src/reset.css',
			  'assets/css/src/style.css',
           ],
           dest: 'assets/css/src/all/style.all.css'
        },
        js_mobile: {
           src: [
              'assets/js/jquery.js',
              'assets/js/bootstrap.js',
           ],
           dest: 'assets/js/all.js'
        },
     },
     cssmin: {
        mobile: {
           src: 'assets/css/src/all/m.style.all.css',
           dest: 'assets/css/m.style.min.css'
        },
        website: {
           src: 'assets/css/src/all/style.all.css',
           dest: 'assets/css/style.min.css'
        }
     },
     uglify: {
        js_mobile: {
           src: 'assets/js/all.js',
           dest: 'assets/js/all.min.js',
        }
     }
 });
 
 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-watch');

 grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
};
