module.exports = function (eleventyConfig) {
  // 加载RSS插件（保留try/catch）
  try {
    const pluginRss = require("@11ty/eleventy-plugin-rss");
    eleventyConfig.addPlugin(pluginRss);
  } catch (e) {
    console.warn("RSS插件加载失败（若不需要RSS可忽略）：", e.message);
  }

  // 核心修复：给所有文章添加默认date字段（优先用created，没有则用updated，最后用当前时间）
  eleventyConfig.addGlobalData("eleventyComputed", {
    date: (data) => {
      return data.created || data.updated || new Date();
    }
  });

  // 原有配置保留不变
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/**/*.md");
  });
  eleventyConfig.addGlobalData("layout", "base.njk");
  eleventyConfig.addFilter('date', (date) => {
    if (!date) return '';
    const d = new Date(date);
    return new Intl.DateTimeFormat('zh-CN').format(d);
  });
  eleventyConfig.addGlobalData("metadata", {
    url: "https://wwgb.github.io/my-blog"
  });

  return {
    pathPrefix: "/my-blog/",
    markdownTemplateEngine: "njk",
    input: ".",
    output: "_site"
  };
};