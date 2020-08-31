---
layout: page
title: Featured Image
category: component
permalink: "/featured-image/"
---

## Overview of Component Group
Image with corresponding text and optional button. Can be used on the homepage or a landing page.

There are slight differences when using this feature on landing page. First, the page title is an H1 -- which is necessary for SEO. Second, the body is the short description, which is used to allow the page to be shareable in other places on the site, including home and search. Third, because the page title is embedded in the feature, we want to make sure that page level fields are also capture (which is listed at the bottom.)

### Design

{% include /patterns/featured-image/featured-image.md %}


## Code
### HTML
```html
  {% include /patterns/featured-image/featured-image.md %}
```

### SCSS
```scss
  {% include /patterns/featured-image/featured-image.scss %}
```

### Functionality
OnClick/OnTap of button, user is brought to target page.

### Specifications

### Feature Image - Home Page

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | feature-image | image | source: feature-image |
| 2    | feature-title | title | source: title |  | The SAMHSA homepage is an exception to this rule.
| 3    | feature-body | text | homepage source: body |
| 4    | button | inverted-button-1 / url link | | | Tag for analytics. 508: add aria-label attribute indicating what learn more about what? For instance aria-label="Learn more about Caring for Every Child’s Mental Health" |

### Feature Image - Landing Page

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | feature-image | image | authored (required) |
| 2    | feature-title | h1 | authored (required) |
| 3    | feature-body | short description | authored (required) |
| 4    | button | url link | authored (required) | | tag for analytics |
| 5    | meta page description | (coded in HTML header) | authored (required) | | Does not show on page - for SEO purposes |
| 6    | head title | (coded in HTML header) | authored (required) | | Does not show on page - for SEO purposes |
