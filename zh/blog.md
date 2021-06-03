---
title: GoodCity.HK 好人好市 - Your quality donated items can help people in need.
layout: default
lang: zh
lang-en: /blog.html
lang-zh: /zh/blog.html
---

<div class="row">
	<div class="small-13 small-offset-1 columns text-center">
		<h1>GoodCity.HK Blog</h1>
	</div>
</div>

<div class="row">
  {% for post in site.tags.zh %}
		{% assign remainder = forloop.index | modulo: 3 %}
		{% if remainder == 0 %}
		<div class="large-4 medium-13 medium-offset-1 columns feature-image round end">
		{% else %}
		<div class="large-4 large-offset-1 medium-13 medium-offset-1 columns feature-image round">
		{% endif %}
			<img src="http://placehold.it/200x200">
			<h4>{{ post.title }}</h4>
			<p class="show-for-medium-up"><!-- excerpt--></p>
			<p><a href="{{ post.url }}" class="button small">更多詳情</a></p>
		{% if remainder == 0 %}
			</div></div><div class="row">
		{% else %}
			</div>
		{% endif %}
  {% endfor %}
</div>
