---
layout: page
title: Text Box Promo
category: component
permalink: "/text-box-promo/"
---

## Overview of Component
Text Box Promo is a component that consists of a title, description text and button links. Recovery Month Home Page Design has an example of this component. Note that the primary link is required, but the secondary link is optional.

### Design

{% include /patterns/text-box-promo/text-box-promo.md %}

## Code
### HTML
```html
  {% include /patterns/text-box-promo/text-box-promo.md %}
```

### SCSS
```scss
  {% include /patterns/text-box-promo/text-box-promo.scss %}
```


### Functionality
1) OnClick/OnTap of links, system displays target page

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | Title | h2 | Authored/required. "A Recovery Story" |
| 2    | Description | text | Authored/required |
| 3    | Primary Link | text/link | Authored/required | | For example - "Read more" |
| 4    | Secondary Link | text/link | Authored (optional). Content= " View all {items}" aria-label = View all {items} | | Used to view a related list of items |
