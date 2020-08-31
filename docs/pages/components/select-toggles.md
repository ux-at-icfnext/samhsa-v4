---
layout: page
title: Select Toggles (Filters)
category: component
permalink: "/select-toggles/"
---
## Overview of Component Group
Select toggles are shown with in the [accordion]({{site.url}}accordion-filter). These items are used to the filter the content as should be applied in a way that is a filtering down of the content within that category of filter. For instance, in a group of T-Shirts here are all the shirts that come in Blue. The filter list should then update to show how many of the other filters can be combined with that, so that if the user then selects Red, they will get a result set of T-shirts that are both red and blue — not all blue shirts plus all red shirts.

If no toggles are applied — the user is seeing everything in that category accordion.

## Design

{% include /patterns/select-toggles/select-toggles.md %}

**Example:**
This example shows the CBHSQ Reports accordion in open state


## Code
### HTML
```html
  {% include /patterns/select-toggles/select-toggles.md %}
```

### SCSS
```scss
  {% include /patterns/select-toggles/select-toggles.scss %}
```

### Functionality

OnClick/OnTap of filter the result set refreshes to show the items that match the filter item.

- During refresh, a loading icon is displayed to let the user know that the page is loading
- Filter list is updated to show the new counts of each filter (in other words, there are X number of items that are remaining in the rest of the filters that are also tagged by the current applied filters)
- Once loaded, the filter show display in the (applied) state, and should be listed as one of the applied filters.
