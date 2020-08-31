---
layout: page
title: Multi-Level Accordion (Filter)
category: component
permalink: "/multi-level-accordion-filter/"
---
## Overview of Component Group
A multi-level filter is one that contains an accordion inside of an accordion. For instance, a populations group filter which may contain sub demographics inside. Another good example is the [location filter]({{site.url}}location-filter), which contains States, Territories, and Regions with in the main accordion of Location. These sub-accordions function in the same way as the main [accordion filter]({{site.url}}accordion-filter).

## Design
In the example, the demographics accordion is displayed in an open state to show the sub-accordions beneath. Gender is also displayed in an open state to show the single select times below.

{% include /patterns/multi-level-accordion-filter/multi-level-accordion-filter.md %}

## Code
### HTML
```html
  {% include /patterns/multi-level-accordion-filter/multi-level-accordion-filter.md %}
```

### SCSS
```scss
  {% include /patterns/multi-level-accordion-filter/multi-level-accordion-filter.scss %}
```

### Functionality

OnLoad all accordions are in the closed position

OnTap/Click of of accordion item, that item opens to display inner content.

OnTap/Click again, the item closes to hide content.
