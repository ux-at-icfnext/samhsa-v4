---
layout: page
title: Single Select Filter (non-accordion)
category: component
permalink: "/single-select-filter/"
---
## Overview of Component Group
A single select option is displayed as a top level filter with no sub-items beneath. This option could be shown along other single select filters and/ or with an accordion filter. (As in the example below). It is recommended, if possible, to try to group your filters into accordion groups if you have too many. And example of this option in use on on the Evidence Based Practice Resource Center.

## Design

{% include /patterns/single-select-filter/single-select-filter.md %}

**Example** In this (hypothetical) example, Substance Abuse Treatment is applied to the filter set

The counts on the other filters are updated to show how many matches are with in the other filters

The Recovery Resources doesn't have any items that are tagged with the applied filter, so it is grayed out

The location filter is an [accordion filter]({{site.url}}accordion-filter).


## Code
### HTML
```html
  {% include /patterns/single-select-filter/single-select-filter.md %}
```

### SCSS
```scss
  {% include /patterns/single-select-filter/single-select-filter.scss %}
```

### Functionality

OnClick/OnTap of filter the result set refreshes to show the items that match the filter item.

- During refresh, a loading icon is displayed to let the user know that the page is loading
- Filter list is updated to show the new counts of each filter (in other words, there are X number of items that are remaining in the rest of the filters that are also tagged by the current applied filters)
- Once loaded, the filter show display in the (applied) state, and should be listed as one of the applied filters.

### Specifications
Items are displayed as

{Name of Filter} ({number of items in filter})

For example: **Prevention Resources (15)**
