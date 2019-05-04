module.exports = function (eleventyConfig) {

    const md = require('markdown-it')({
        html: false,
        breaks: true,
        linkify: true
    });

    eleventyConfig.addNunjucksFilter("markdownify", markdownString => md.render(markdownString));

    // Don't process folders with static assets e.g. images
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("_headers");



    return {
        passthroughFileCopy: true,
        dataTemplateEngine: "njk",
        dir: {
            input: ".",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
            output: "_site"
        }
    };
};