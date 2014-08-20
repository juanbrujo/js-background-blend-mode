module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("js-background-blend-mode.json"),
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  By: <%= pkg.author.name %> |  <%= pkg.author.twitter %>\n" +
				" *  License: <%= pkg.licenses[0].type %>\n" +
				" */\n"
		},
		concat: {
			dist: {
				src: ["src/js-background-blend-mode.js"],
				dest: "dist/js-background-blend-mode.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		jshint: {
			files: ["src/js-background-blend-mode.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		uglify: {
			my_target: {
				src: ["src/js-background-blend-mode.js"],
				dest: "dist/js-background-blend-mode.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		less: {
	      dist: {
	      	options: {
	      		compress: true
	      	},
	        files: {
	            'demo/css/js-background-blend-mode.min.css': 'src/js-background-blend-mode.less'
	        }
	      } 
	    },
		watch: {
		    scripts: {
				files: ['src/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['src/*.less'],
				tasks: ['less'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['demo/*.html'],
			},
		    tasks: ['default']
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint", "concat", "uglify"]);
	grunt.registerTask("travis", ["jshint"]);

};
