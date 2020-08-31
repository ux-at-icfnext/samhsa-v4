---
layout: page
title: Filters
category: component
permalink: "/filters/"
---
## Overview of Component Group
The components listed below show the different type of filter mechanisms available. The filters chosen for use on a particular search or filter experiences is best on the taxonomy and content available. The specifications below describe the UI look & feel and functionality. The order of filters chosen should be determined by the needs for that experience, but it is advised that the date filter show at the top.

### Filter Component List
- [Accordion Filter]({{site.url}}accordion-filter)
- [Multi-Level Accordion Filter]({{site.url}}multi-level-accordion-filter)
- [Single Select Filter (non-accordion)]({{site.url}}single-select-filter)
- [Date Range Filter]({{site.url}}date-range-filter)
- [Select Toggles]({{site.url}}select-toggles-filter)
- [Location Filter]({{site.url}}location-filter)

### Overall Functionality

Filters are applied instantly on user interaction.

A loader shows over the result set while waiting for the results to reload (See [CBHSQ Data Search](https://www.samhsa.gov/data/all-reports?search_api_views_fulltext=&items_per_page=15) for example - just chose a filter to view loader)

[Applied Filters]({{site.url}}applied-filetrs) show within the Search Header (when used by that experience)

### Design

{% include /patterns/filters/filters.md %}

## Code
### HTML
```html
  {% include /patterns/filters/filters.md %}
```

### SCSS
```scss
  {% include /patterns/filters/filters.scss %}
```

Filter items show the number of items in the result that match that filter. As the filters are applied to the results, the counts should update to show the new current count. Counts of 0 should be grayed out.

### Small Screens
On small screens, the filters are held within the filter accordion on page load. OnClick/OnTap accordion opens to show the filtered items.

**Visual Notes**
Font size: 22px
Color: #1A6986

```html
  {% include /patterns/filters/filters-small-screen.md %}
```

Filter-icon - customized
