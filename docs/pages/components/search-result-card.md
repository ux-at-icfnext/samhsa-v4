---
layout: page
title: Search Result Card
category: component
permalink: "/search-result-card/"
---
## Overview of Component Group
The search results are pulled from throughout the SAMHSA site and microsites.

The result is constrained by:

- key words used in search
- applied filters
- amount of results viewed

## Design

{% include /patterns/search-result-card/search-result-card.md %}

**Example:**
Two examples are shown left. The first is from SAMHSA Publications, the second is from CBSHQ data. One thing to note is that the date field from data is collection date, ***not*** publish date, and the years are aggregated.


## Code
### HTML
```html
  {% include /patterns/search-result-card/search-result-card.md %}
```

### SCSS
```scss
  {% include /patterns/search-result-card/search-result-card.scss %}
```

### Functionality

The full result card is clickable.

On click of, system displays the related content page.

### Specifications

**All the content should be dynamically pulled from the content page**

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | Result title | H3|  | Title displays as URL link | |
| 2    | Data source | Text | | | This is where the content comes from (ie. SAMHSA Publishing, CBHSQ Data, etc) |
| 3    | Date / Date Range | Date | Publish date format: Monday DD, YYY, HH:MM am/pm Collection date format: date range | | Note that sites like CBSQH Data should use the collection date. |
| 4    | Summary | Text | 240 characters maximum |
| 5    | Format | Text & icon | show the type of page, if not an online page (like pdf) | 
