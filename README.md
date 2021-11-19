# Site Guide


## Deployment

https://www.goodcity.hk is hosted on Azure CDN / Azure Storage. Changes pushed to the *live* branch will trigger a deployment via CircleCI.

Likewise, changes pushed to *master* will trigger a CircleCI deployment to https://www-staging.goodcity.hk for review.

Suggested workflow:

* Develop locally on in GitHub web
* Push changes to master
* Review changes on https://www-staging.goodcity.hk
* Create and merge pull-request master -> live
* Changes will be pushed to https://www.goodcity.hk

## Install and Run Jekyll Locally

```
rvm install 2.7.3
gem install bundler jekyll
bundle exec jekyll serve
```
Now open http://localhost:4000


## Layouts

There are 3 site layouts

- default (one column)
- two-column
- blog

If you want a right-hand side element, use two-column layout and specify `second-column: sponsors.html` where `sponsors.html` is located in the `includes/` folder.

## Front Matter

To specific language versions e.g. for a page called `ngo.md`, create a corresponding file called `zh/ngo.md`. Both files should contain the following front matter:

```
lang: en
lang-en: /ngo.html
lang-zh: /zh/ngo.html
```

_Note: swap the `lang: en` for `lang: zh` on the `/zh/ngo.md` version._

This will set the correct `<html lang="en">` header and also the `<link rel="alternate" hreflang="zh-hant">` tags. Some templates also incorporate `{% if page.lang == 'en' %}` style code which is set by these parameters. The language switcher also uses the `lang-xx` tags to switch to the correct page.

## Blog Posts

Put all blog posts in the `_posts` folder using the structure `yyyy-mm-dd-name-of-post-<lang>.md`. There should be a `en` version and a `zh` version. Use the front matter above to set the correct urls for the language switcher.
