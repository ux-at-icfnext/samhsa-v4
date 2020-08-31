---
layout: page
title: Accordion (Filter)
category: component
permalink: "/accordion-filter/"
---
## Overview of Component Group
Using an accordion in your filter helps to keep the information nice and clean. Children filters are contained with in the parent filter, and the parent is used as an accordion. Accordions can also be used at the child level when there is a grandchild level of filters. For example, a location filter that has "Location" as the parent, "States", "Territories", and "Regions" as the children, and the grandchildren as the content for all of those.

## Design
These examples show the accordions on CBHSQ Data. Screen 1 shows the accordions in the closed state - Screen 2 shows the survey type in open state.

{% include /patterns/accordion-filter/accordion-filter.md %}

## Code
### HTML
```html
  {% include /patterns/accordion-filter/accordion-filter.md %}
```

### SCSS
```scss
  {% include /patterns/accordion-filter/accordion-filter.scss %}
```

### Functionality

OnLoad all accordions are in the closed position

OnTap/Click of of accordion item, that item opens to display inner content.

OnTap/Click again, the item closes to hide content.

### Specifications
Font awesome - angle-right solid - <i class="fas fa-angle-right"></I> - color: 9C9B9C

Border color: color: 9C9B9C

Padding 5px
