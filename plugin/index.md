---
layout: base.njk
---

# 插件

{% for post in collections.blog %}
{% if "plugin" in post.data.webtab %}
<p><a href="{{ post.url }}">{{ post.data.title }}</a></p>
{% endif %}
{% endfor %}