---
layout: page
title: Sort and View Search Settings
category: component
permalink: "/sort-view-search-settings/"
---
## Overview of Component Group
Sort by and View are the settings for how search is viewed on the page.

On Page load:

- Sort by shows the most relevant results first
- View sets the page to view 15 records by default

## Design

{% include /patterns/sort-view-search-settings/sort-view-search-settings.md %}

## Code
### HTML
```html
  {% include /patterns/sort-view-search-settings/sort-view-search-settings.md %}
```

### SCSS
```scss
  {% include /patterns/sort-view-search-settings/sort-view-search-settings.scss %}
```

### Functionality

**Sort**
OnSelect, system displays the result set in the order that matches the users choice

- Relevance: Most relevant first
- Most Recent
- Oldest

**View**
OnSelect, system displays the number of items in the result set that matches the users choice

- 15 (default)
- 50
- 100
