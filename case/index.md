---
layout: base.njk
---

# 案例库

<div class="card-grid">
{% for post in collections.blog %}
{% if post.data.webtab and "case" in post.data.webtab %}

  {% set banner = post.data.banner %}
  {% set title = post.data.title %}
  {% set url = post.url %}
  {% set tags = post.data.tags %}
  {% set description = post.data.description %}
  {% set created = post.data.date %}

  {% include "components/card.njk" %}

{% endif %}
{% endfor %}
</div>