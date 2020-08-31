---
layout: page
title: Four Links List
category: component
permalink: "/four-links-list/"
---

## Overview of Component Group
The "Four Links List" is a small section that includes up to four list items that link to different areas of the SAMHSA website or external sources.

The Get Help widget is a better component to use for maintenance and upkeep (manual input vs dynamic)

This Link List should hyperlink to resources within that particular section of the website (e.g., Tribal Affairs).

### Design

{% include /patterns/four-links-list/four-links-list.md %}


## Code
### HTML
```html
  {% include /patterns/four-links-list/four-links-list.md %}
```


### SCSS
```scss
  {% include /patterns/four-links-list/four-links-list.scss %}
```


### Functionality
The "four links list" has up to four, clickable in-line links to other webpages.

1) OnClick/OnTap of each link, website will display designated page URL

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | title | h3 |For the example shown, text: "Other Helplines" but text depends on the mix of links and location of this component |
| 2    | list item | text | 50-60 characters between 1-4 links |
| 3    | link | URL | Manually created; will depend on specific links needed |
