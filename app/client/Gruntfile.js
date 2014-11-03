module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		emberTemplates: {
			compile: {
				options: {
					templateBasePath: /resource\/templates\//
				},
				files: {
					'release/templates/templates.js': 'resource/templates/**/*.hbs'
				}
			}
		},
		watch: {
			emberTemplates: {
				files: 'resource/templates/**/*.hbs',
				tasks: ['emberTemplates']
			},
			coffee: {
				files: ['resource/coffee/**/*.coffee'],
				tasks: ['coffee:compile']
			},
			less: {
				files: ['resource/less/*.less'],
				tasks: ['less']
			},
			cssmin: {
				files: 'resource/css/*.css',
				tasks: ['cssmin']
			},
			uglify: {
				files: ['resource/js/*.js'],
				tasks: ['uglify']
			}
		},
		connect: {
		 	server: {
	          options: {
	            port: 8888,
	            hostname: '127.0.0.1',
	            keepalive: true
	          }
	        }
		},
		uglify: {
			my_target: {
				files: {
					'release/js/controllers.js': 'resource/js/controllers.js',
					'release/js/components.js': 'resource/js/components.js',
					'release/js/models.js': 'resource/js/models.js',
					'release/js/views.js': 'resource/js/views.js',
					'release/js/utils.js': 'resource/js/utils.js',
					'release/js/routes.js': 'resource/js/routes.js',
                    'release/js/app.js': 'resource/js/app.js',
                    'release/js/router.js':'resource/js/router.js'
				}
			}
		},
		coffee: {
			compile: {
				options: {
					join: true
				},
				files: {
					'resource/js/controllers.js': 'resource/coffee/controllers/*.coffee',
					'resource/js/components.js': 'resource/coffee/components/*.coffee',
					'resource/js/models.js': 'resource/coffee/models/*.coffee',
					'resource/js/views.js': 'resource/coffee/views/*.coffee',
					'resource/js/utils.js': 'resource/coffee/utils/*.coffee',
					'resource/js/routes.js': 'resource/coffee/routes/*.coffee',
                    'resource/js/app.js': 'resource/coffee/app.coffee',
                    'resource/js/router.js': 'resource/coffee/router.coffee'
				}
			}
		},
		less: {
			base: {
				files: {
					'resource/css/app.css': 'resource/less/*.less'
				}	
			}
		},
        cssmin: {
			combine: {
				files: {
					'release/css/app.css' : 'resource/css/*.css'
				}
			},
			minify: {
				files: {
					'release/css/app.min.css': 'release/css/app.css'
				}
			}
		}
    });
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-coffee');
    // Default task(s).
    grunt.registerTask('default', ['coffee', 'less', 'cssmin','emberTemplates', 'uglify', 'watch']);
};
