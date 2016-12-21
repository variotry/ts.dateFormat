let gulp = require( "gulp" );

gulp.task( "build:ts", () =>
{
	let build = require( "./gulpfiles/typeScript" ).buildTypeScript;
	return build( "src/**/*.ts", "dist", { genDefinition: true } );
} );