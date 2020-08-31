---
layout: page
title: Keyword Results Text
category: component
permalink: "/keyword-results-text/"
---
## Overview of Component Group
When a user performs a search by entering text into the input form of the search submit widget, the text shown in the Search Page Header confirms the result set is based on the term used.

If the user performs an empty search (they hit submit with out entering text) then the text should read, "Showing all results"

## Design

{% include /patterns/keyword-results-text/keyword-results-text.md %}
**Visual Notes**
Text style is *italics*

## Code
### HTML
```html
  {% include /patterns/keyword-results-text/keyword-results-text.md %}
```

### SCSS
```scss
  {% include /patterns/keyword-results-text/keyword-results-text.scss %}
```
