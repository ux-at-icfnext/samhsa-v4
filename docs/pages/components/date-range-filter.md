---
layout: page
title: Date Range (Filter)
category: component
permalink: "/date-range-filter/"
---
## Overview of Component Group
Date range should be located at the top of the filter options. Date range options are shown inside an [accordion]({{site.url}}accordion-filter) .

## Design

{% include /patterns/date-range-filter/date-range-filter.md %}

## Code
### HTML
```html
  {% include /patterns/date-range-filter/date-range-filter.md %}
```

### SCSS
```scss
  {% include /patterns/date-range-filter/date-range-filter.scss %}
```

### Functionality

From date is the date of the earliest record

To date is current year

OnSelect of Date dropdown, date range is applied to result set
