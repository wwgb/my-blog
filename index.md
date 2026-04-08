---
layout: base.njk
---

# 我的数字花园

## 最新文章

<ol>
{% for post in collections.blog %}
<li>
<a href="{{ post.url }}">{{ post.data.title }}</a>
</li>
{% endfor %}
</ol>