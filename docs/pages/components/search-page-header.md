---
layout: page
title: Search Page Header
category: component
permalink: "/search-page-header/"
---
## Overview of Component Group
Collectively these components are shown at the top of every search page.

## Design

{% include /patterns/search-page-header/search-page-header.md %}

## Code
### HTML
```html
  {% include /patterns/search-page-header/search-page-header.md %}
```

### SCSS
```scss
  {% include /patterns/search-page-header/search-page-header.scss %}
```
### Specifications

| ID   | Name | Component/Element/Field Type  | Content | Visual | Functional | Printing
|------|------|-------------|---------|--------|-------|----|
| 1    | Page Title | h1 |authored/required. 75 characters. | Directly under the title, left justified, is a red bar, #CD3835, 2 pixels high, 80 pixels wide | Title text = "Search" , Page summary is null |
| 1.1    | Page Summary | Rich Text | authored/required | | Great for SEO. |
| 2      | Keyword | [Keyword Results Text]({{ site.url }}keyword-results-text) | Text = "Showing results for {Keyword}" | Text is in *italics* |
| 3      | Applied Filters | [Applied Filters]({{ site.url }}applied-filters) | Text is the applied filter. If filter is inside an parent, the parent is also show (e.g. Location: Washington) | uses the primary button with font-awesome close icon | OnClick/On Tap of button, filter is removed from result set. | These print as text (not as buttons) -  "Applied filters: {Filter name}, {Filter name}" |
| 4      | Search Settings | [Sort &View Search Settings]({{ site.url }}sort-and-view-search-settings) | | | | Do not print! |
