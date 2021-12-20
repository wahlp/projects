const now = String(Date.now())

module.exports = function(eleventyConfig) {
    // eleventyConfig.addWatchTarget('./tailwind.config.js')
    eleventyConfig.addWatchTarget('./src/css/')

    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
    eleventyConfig.addPassthroughCopy({ 'src/misc/.nojekyll': '.nojekyll' });
    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
      })

    eleventyConfig.addShortcode('version', function () {
        return now
    })

    return {
        dir: {
            input: 'src',
            output: '_site',
        }
    };
};