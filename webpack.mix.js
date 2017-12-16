let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/home/js/app.js', 'public/js')
    .js('resources/assets/admin/js/admin.js', 'public/js')
   .sass('resources/assets/home/sass/app.scss', 'public/css')
   .sass('resources/assets/admin/sass/admin.scss', 'public/css')
   .extract(['vue','axios']);