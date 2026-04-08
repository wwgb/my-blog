module.exports = function (eleventyConfig) {

  // 1. 静态文件 passthrough —— 让 11ty 自动复制 css、images 到输出目录
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  // 2. 自定义文章集合 —— 自动读取 blog 文件夹下的所有 .md 文章
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md");
  });

  // 3. ✅ 全局默认布局 —— 所有 Markdown 文件自动使用 base.njk
  // 以后不用再写：layout: base.njk 了！
  eleventyConfig.addGlobalData("layout", "base.njk");


// 优雅的日期格式化
eleventyConfig.addFilter('date', (date) => {
  if (!date) return '';
  const d = new Date(date);
  return new Intl.DateTimeFormat('zh-CN').format(d);
});

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("metadata", {
    url: "https://wwgb.github.io/my-pkm-blog/" // 例如 https://xxx.github.io
  });
};


  // 4. 基础配置（必须保留，保证 11ty 正常工作）
  return {
    // 让 Markdown 支持 Nunjucks 语法（{{ }} 之类）
    markdownTemplateEngine: "njk",
    // 输入目录（当前目录）
    input: ".",
    // 输出目录（编译后的网站）
    output: "_site"
  };

};