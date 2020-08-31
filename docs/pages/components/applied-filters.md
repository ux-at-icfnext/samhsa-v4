---
layout: page
title: Applied Filters
category: component
permalink: "/applied-filters/"
---
## Overview of Component Group
Users are able to use [Filters]({{site.url}}filters)  on result set to help find the content they are looking for. Once a filter is applied to the result set, that filter shows as an applied filter within the Search Page Header.

The name of the filter is used for the button. If the filter is within another filter, the parent name also shows (e.g. Location: Washington).

## Design

{% include /patterns/applied-filters/applied-filters.md %}

**Visual Notes**
Uses the primary button

Uses the font-awesome "times" icon → [https://fontawesome.com/icons/times?style=solid](https://fontawesome.com/icons/times?style=solid)

Filter buttons layout horizontally with a 10px margin between them. If the reach the page border, they will wrap to the next line.

## Code
### HTML
```html
  {% include /patterns/applied-filters/applied-filters.md %}
```

### SCSS
```scss
  {% include /patterns/applied-filters/applied-filters.scss %}
```


### Functionality
OnClick / OnTap of button, filter parameters are removed from result set.
