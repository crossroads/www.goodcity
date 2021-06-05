---
title: Blog | GoodCity.HK 好人好市 - Your quality donated items can help people in need.
layout: default
lang: en
lang-en: /blog.html
lang-zh: /zh/blog.html
---

<div class="row">
	<div class="small-13 small-offset-1 columns text-center">
		<h1>GoodCity.HK Blog</h1>
	</div>
</div>

<div class="row">
	<div class="large-8 medium-13 medium-offset-1 columns blog">
		<ul>
		{% for post in site.tags.en %}
			<li>
				<a href="{{ post.url }}">{{ post.title }}</a>
			</li>
		{% endfor %}
		</ul>
	</div>
</div>
