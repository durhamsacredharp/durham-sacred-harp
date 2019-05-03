module.exports = function (eleventyConfig) {

    // Don't process folders with static assets e.g. images
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("_headers");

    return {
        passthroughFileCopy: true,
        dir: {
            input: ".",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
            output: "_site"
        }
    };
};