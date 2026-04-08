---
layout: base.njk
title: PKM思考
---

<div class="waterfall-header">
  <h1>PKM 思考</h1>
  <p>个人知识管理的日常记录与思考</p>
</div>

<div class="waterfall-grid">
{% for post in collections.blog %}
{% if "memo" in post.data.webtab %}

  {# 排版变体：8种，独立循环 #}
  {% set layout = loop.index0 % 8 %}
  
  {# 风格变体：7种，独立循环（与排版无关） #}
  {% set styleIndex = loop.index0 % 7 %}
  
  {# 第二列第一张卡片矮一点 #}
  {% set is_short = (loop.index0 == 1) %}

  <!-- 风格类名映射 -->
  {% if styleIndex == 0 %}{% set styleClass = "style-mondrian" %}
  {% elif styleIndex == 1 %}{% set styleClass = "style-macaron" %}
  {% elif styleIndex == 2 %}{% set styleClass = "style-morandi" %}
  {% elif styleIndex == 3 %}{% set styleClass = "style-dark" %}
  {% elif styleIndex == 4 %}{% set styleClass = "style-pop" %}
  {% elif styleIndex == 5 %}{% set styleClass = "style-japanese" %}
  {% else %}{% set styleClass = "style-cyber" %}
  {% endif %}

  <!-- ========== 排版 1：大图在上 ========== -->
  {% if layout == 0 %}
  <div class="waterfall-card w-card--image-top {{ styleClass }} {% if is_short %}waterfall-card--short{% endif %}">
    <div class="w-image">
      <img src="{{ post.data.banner }}" alt="{{ post.data.title }}">
      <div class="w-stickers">
        {% for tag in post.data.tags %}
          <span class="w-sticker">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    <div class="w-content">
      <h3 class="w-title"><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
      <div class="w-date">{{ post.data.created | date("YYYY.MM.DD") }}</div>
      <p class="w-desc">{{ post.data.description | truncate(100) }}</p>
    </div>
  </div>

  <!-- ========== 排版 2：大标题 + 小图在右 ========== -->
  {% elif layout == 1 %}
  <div class="waterfall-card w-card--title-right {{ styleClass }} {% if is_short %}waterfall-card--short{% endif %}">
    <div class="w-content">
      <div class="w-tags">
        {% for tag in post.data.tags %}
          <span class="w-tag">#{{ tag }}</span>
        {% endfor %}
      </div>
      <h2 class="w-title-xl"><a href="{{ post.url | url }}">{{ post.data.title }}</a></h2>
      <div class="w-date">{{ post.data.created | date("MM/DD") }}</div>
      <p class="w-desc">{{ post.data.description | truncate(80) }}</p>
    </div>
    <div class="w-image-small">
      <img src="{{ post.data.banner }}" alt="{{ post.data.title }}">
    </div>
  </div>

  <!-- ========== 排版 3：图片在左 + 标题紧凑 ========== -->
  {% elif layout == 2 %}
  <div class="waterfall-card w-card--image-left {{ styleClass }} {% if is_short %}waterfall-card--short{% endif %}">
    <div class="w-image-square">
      <img src="{{ post.data.banner }}" alt="{{ post.data.title }}">
    </div>
    <div class="w-content">
      <div class="w-date">{{ post.data.created | date("MM/DD") }}</div>
      <h4 class="w-title-md"><a href="{{ post.url | url }}">{{ post.data.title }}</a></h4>
      <div class="w-tags-inline">
        {% for tag in post.data.tags %}
          <span class="w-tag-small">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
  </div>

  <!-- ========== 排版 4：全宽图片 + 文字叠加 ========== -->
  {% elif layout == 3 %}
  <div class="waterfall-card w-card--hero {{ styleClass }} {% if is_short %}waterfall-card--short{% endif %}">
    <div class="w-image-full">
      <img src="{{ post.data.banner }}" alt="{{ post.data.title }}">
      <div class="w-overlay"></div>
      <div class="w-content-overlay">
        <div class="w-tags-light">
          {% for tag in post.data.tags %}
            <span class="w-tag-light">#{{ tag }}</span>
          {% endfor %}
        </div>
        <h3 class="w-title-light"><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
        <div class="w-date-light">{{ post.data.created | date("YYYY.MM.DD") }}</div>
      </div>
    </div>
  </div>

  <!-- ========== 排版 5：极简 + 小图 ========== -->
  {% elif layout == 4 %}
  <div class="waterfall-card w-card--minimal {{ styleClass }} {% if is_short %}waterfall-card--short{% endif %}">
    <div class="w-content">
      <div class="w-date">{{ post.data.created | date("MM/DD") }}</div>
      <h3 class="w-title"><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
      <div class="w-tags">
        {% for tag in post.data.tags %}
          <span class="w-tag-outline">{{ tag }}</span>
        {% endfor %}
      </div>
      <p class="w-desc-clamp">{{ post.data.description | truncate(60) }}</p>
    </div>
    <div class="w-image-tiny">
      <img src="{{ post.data.banner }}" alt="{{ post.data.title }}">
    </div>
  </div>

  <!-- ========== 排版 6：手帐风格 ========== -->
  {% elif layout == 5 %}
  <div class="waterfall-card w-card--handbook {{ styleClass }} {% if is_short %}waterfall-card--short{% endif %}">
    <div class="w-handbook-date">{{ post.data.created | date("DD") }}<span>{{ post.data.created | date("MM/YYYY") }}</span></div>
    <div class="w-image-offset">
      <img src="{{ post.data.banner }}" alt="{{ post.data.title }}">
    </div>
    <h3 class="w-title-handbook"><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
    <div class="w-tags-scattered">
      {% for tag in post.data.tags %}
        <span class="w-tag-handbook">{{ tag }}</span>
      {% endfor %}
    </div>
    <p class="w-desc-handbook">{{ post.data.description | truncate(80) }}</p>
    <div class="w-handbook-deco">✦</div>
  </div>

  <!-- ========== 排版 7：引号风格 ========== -->
  {% elif layout == 6 %}
  <div class="waterfall-card w-card--quote {{ styleClass }} {% if is_short %}waterfall-card--short{% endif %}">
    <div class="w-quote-mark">“</div>
    <p class="w-quote-text">{{ post.data.description | truncate(120) }}</p>
    <div class="w-quote-footer">
      <div class="w-tags">
        {% for tag in post.data.tags %}
          <span class="w-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      <h3 class="w-title-quote"><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
      <div class="w-date">{{ post.data.created | date("YYYY.MM.DD") }}</div>
    </div>
    <div class="w-image-quote">
      <img src="{{ post.data.banner }}" alt="{{ post.data.title }}">
    </div>
  </div>

  <!-- ========== 排版 8：双图对比 ========== -->
  {% else %}
  <div class="waterfall-card w-card--dual {{ styleClass }} {% if is_short %}waterfall-card--short{% endif %}">
    <div class="w-dual-images">
      <img src="{{ post.data.banner }}" alt="{{ post.data.title }}">
      <img src="{{ post.data.banner }}" alt="{{ post.data.title }}">
    </div>
    <div class="w-content">
      <h3 class="w-title"><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
      <div class="w-tags">
        {% for tag in post.data.tags %}
          <span class="w-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      <div class="w-date">{{ post.data.created | date("YYYY.MM.DD") }}</div>
    </div>
  </div>
  {% endif %}

{% endif %}
{% endfor %}
</div>

<style>
/* ========== 页面头部 ========== */
.waterfall-header {
  text-align: center;
  padding: 48px 0 32px;
  border-bottom: 1px solid #f0ebe2;
  margin-bottom: 8px;
}

.waterfall-header h1 {
  font-size: 32px;
  font-weight: 550;
  color: #2c2418;
  margin: 0 0 12px;
}

.waterfall-header p {
  font-size: 16px;
  color: #b8a88c;
  margin: 0;
}

/* ========== 瀑布流容器 ========== */
.waterfall-grid {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  column-count: initial !important; /* 关掉原生多列，用JS瀑布流 */
}




/* ========== 卡片基础样式 ========== */
.waterfall-card {
  width: calc(50% - 12px);
  margin-bottom: 24px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  break-inside: avoid;
  float: left;    /* 关键 */
  height: auto !important;
}

.waterfall-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.waterfall-card--short {
  min-height: 200px;
}

/* ========== 图片通用 ========== */
.w-image img,
.w-image-small img,
.w-image-square img,
.w-image-tiny img,
.w-image-offset img,
.w-image-full img,
.w-image-quote img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ========== 排版通用样式（所有风格共用） ========== */
.w-content { padding: 16px; }
.w-title { font-size: 17px; font-weight: 600; margin: 0 0 6px; }
.w-title a { text-decoration: none; }
.w-title a:hover { opacity: 0.7; }
.w-date { font-size: 11px; font-family: monospace; margin-top: 8px; }
.w-desc { font-size: 13px; line-height: 1.45; margin-top: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

/* 排版2 */
.w-card--title-right { display: flex; gap: 14px; padding: 18px; }
.w-card--title-right .w-content { flex: 1; padding: 0; }
.w-card--title-right .w-image-small { width: 90px; height: 90px; flex-shrink: 0; border-radius: 12px; overflow: hidden; }
.w-tags { margin-bottom: 8px; }
.w-tag { display: inline-block; font-size: 11px; padding: 4px 10px; border-radius: 20px; margin-right: 6px; margin-bottom: 6px; }
.w-title-xl { font-size: 19px; font-weight: 700; line-height: 1.3; margin: 10px 0 8px; }
.w-title-xl a { text-decoration: none; }

/* 排版3 */
.w-card--image-left { display: flex; gap: 12px; padding: 14px; }
.w-image-square { width: 70px; height: 70px; flex-shrink: 0; border-radius: 12px; overflow: hidden; }
.w-card--image-left .w-content { flex: 1; padding: 0; }
.w-title-md { font-size: 14px; font-weight: 600; margin: 6px 0; }
.w-title-md a { text-decoration: none; }
.w-tags-inline { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.w-tag-small { font-size: 9px; padding: 3px 8px; border-radius: 20px; }

/* 排版4 */
.w-card--hero { padding: 0; }
.w-image-full { position: relative; aspect-ratio: 4 / 5; }
.w-image-full img { width: 100%; height: 100%; object-fit: cover; }
.w-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
.w-content-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 18px; color: white; }
.w-tags-light { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.w-tag-light { font-size: 9px; padding: 3px 8px; border-radius: 20px; backdrop-filter: blur(2px); }
.w-title-light { font-size: 17px; font-weight: 700; margin: 0 0 6px; }
.w-title-light a { color: white; text-decoration: none; }
.w-date-light { font-size: 10px; font-family: monospace; }

/* 排版5 */
.w-card--minimal { display: flex; gap: 12px; padding: 14px; }
.w-card--minimal .w-content { flex: 1; padding: 0; }
.w-image-tiny { width: 55px; height: 55px; flex-shrink: 0; border-radius: 10px; overflow: hidden; }
.w-tag-outline { background: transparent; border: 1px solid; }
.w-desc-clamp { font-size: 12px; margin-top: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

/* 排版6 */
.w-card--handbook { position: relative; padding: 22px 18px 18px; }
.w-handbook-date { position: absolute; top: 14px; left: 14px; font-size: 22px; font-weight: 700; line-height: 1; font-family: monospace; }
.w-handbook-date span { font-size: 9px; display: block; }
.w-image-offset { width: 85%; margin: 32px auto 14px auto; border-radius: 12px; overflow: hidden; transform: rotate(0.5deg); }
.w-title-handbook { font-size: 16px; font-weight: 650; text-align: center; margin: 12px 0 10px; }
.w-title-handbook a { text-decoration: none; }
.w-tags-scattered { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
.w-tag-handbook { font-size: 10px; padding: 3px 10px; border-radius: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
.w-desc-handbook { font-size: 12px; line-height: 1.45; text-align: center; padding: 10px; border-radius: 12px; }
.w-handbook-deco { position: absolute; bottom: 12px; right: 14px; font-size: 14px; opacity: 0.5; }

/* 排版7 */
.w-card--quote { padding: 22px; position: relative; }
.w-quote-mark { font-size: 44px; opacity: 0.3; font-family: Georgia, serif; line-height: 1; margin-bottom: 8px; }
.w-quote-text { font-size: 14px; line-height: 1.5; font-style: italic; margin: 0 0 14px; }
.w-quote-footer { border-top: 1px solid; padding-top: 12px; }
.w-title-quote { font-size: 15px; font-weight: 600; margin: 8px 0 4px; }
.w-title-quote a { text-decoration: none; }
.w-image-quote { position: absolute; bottom: 14px; right: 14px; width: 36px; height: 36px; border-radius: 8px; overflow: hidden; opacity: 0.6; }

/* 排版8 */
.w-card--dual { padding: 14px; }
.w-dual-images { display: flex; gap: 8px; margin-bottom: 10px; }
.w-dual-images img { width: 50%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 12px; }

/* ========== 7种风格配色（只改颜色，不改结构） ========== */

/* 风格1：蒙德里安 */
.style-mondrian { background: white; border: 4px solid #1a1a1a; position: relative; }
.style-mondrian::before { content: ""; position: absolute; top: 0; left: 0; width: 30%; height: 30%; background: #c22b2b; z-index: 0; }
.style-mondrian::after { content: ""; position: absolute; bottom: 0; right: 0; width: 40%; height: 40%; background: #1e3a8a; z-index: 0; }
.style-mondrian .w-image, .style-mondrian .w-content { position: relative; z-index: 1; }
.style-mondrian .w-sticker { background: #f5c542; color: #1a1a1a; }
.style-mondrian .w-title a { color: #1a1a1a; }
.style-mondrian .w-date { color: #1a1a1a; }
.style-mondrian .w-desc { color: #4a4a4a; }

/* 风格2：马卡龙 */
.style-macaron { background: linear-gradient(135deg, #fdeef9, #fff0e0); border-radius: 32px; }
.style-macaron .w-tag { background: #f8c8dc; color: #b34180; }
.style-macaron .w-title-xl a { color: #c44569; }
.style-macaron .w-date { color: #e8a0b4; }
.style-macaron .w-desc { color: #8a6e7a; }

/* 风格3：莫兰迪 */
.style-morandi { background: #f0ede8; }
.style-morandi .w-tag-small { background: #d4cfc4; color: #6a675c; }
.style-morandi .w-title-md a { color: #6a675c; }
.style-morandi .w-date { color: #9e9a8c; }
.style-morandi .w-desc { color: #8a8678; }

/* 风格4：暗黑 */
.style-dark { background: #0a0a0a; border: 1px solid #2a2a2a; }
.style-dark .w-overlay { background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 100%); }
.style-dark .w-tag-light { background: #f5c542; color: #0a0a0a; }
.style-dark .w-title-light a { color: #f5c542; }
.style-dark .w-date-light { color: #8a8a8a; }
.style-dark .w-title a { color: #f5c542; }
.style-dark .w-date { color: #8a8a8a; }
.style-dark .w-desc { color: #aaa; }

/* 风格5：波普 */
.style-pop { background: #ffef00; border: 3px solid #ff0055; box-shadow: 8px 8px 0 #00ccff; }
.style-pop .w-tag-outline { border-color: #ff0055; color: #ff0055; background: white; }
.style-pop .w-title a { color: #ff0055; }
.style-pop .w-date { color: #00aaff; }
.style-pop .w-desc { color: #1a1a1a; }
.style-pop .w-image-tiny { border: 3px solid #00ccff; }

/* 风格6：日式清新 */
.style-japanese { background: #fef7e8; border: 1px solid #e0d0b8; }
.style-japanese .w-tag-handbook { background: #d4e0c0; color: #5a6e3a; }
.style-japanese .w-title-handbook a { color: #8b6b4d; }
.style-japanese .w-handbook-date { color: #8b6b4d; }
.style-japanese .w-desc-handbook { background: #fff8f0; color: #9a8a72; }

/* 风格7：赛博朋克 */
.style-cyber { background: linear-gradient(135deg, #0d0d2b, #1a0a2e); border: 1px solid #00ffff; box-shadow: 0 0 20px rgba(0,255,255,0.1); }
.style-cyber .w-tag { background: #ff00ff20; color: #00ffff; border: 1px solid #00ffff; backdrop-filter: blur(4px); }
.style-cyber .w-title-quote a { color: #00ffff; font-family: monospace; letter-spacing: 2px; }
.style-cyber .w-date { color: #ff00ff; }
.style-cyber .w-quote-mark { color: #00ffff; }
.style-cyber .w-quote-text { color: #ccccff; }

/* 响应式 */
@media (max-width: 768px) {
  .waterfall-grid { max-width: 100%; padding: 0 16px; }
  .waterfall-card { width: 100%; }
  .waterfall-header { padding: 32px 0 24px; }
  .waterfall-header h1 { font-size: 26px; }
}
</style>

<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var grid = document.querySelector('.waterfall-grid');
    if (grid) {
      var msnry = new Masonry(grid, {
        itemSelector: '.waterfall-card',
        columnWidth: '.waterfall-card',
        gutter: 24,
        fitWidth: true,
        transitionDuration: '0.3s'
      });
      imagesLoaded(grid, function() {
        msnry.layout();
      });
    }
  });
</script>