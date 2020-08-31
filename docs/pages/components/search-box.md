---
layout: page
title: Search Box
category: component
permalink: "/search-box/"
---
## Overview of Component Group
The search box is used through out the site to enact searches. The global header contains the search in the top left (on mobile it's viewed by clicking the search icon). On microsites, such as CBSHQ Data and Recovery Month, the search box is connected to their site search, and the place holder text is changed to reflect that. For in-page searches, such as on the resource pages or the CBSHQ Data home page, the place holder text should be changed to the context of the situation. On the search results pages, the placeholder text is simply "search again".

## Design

{% include /patterns/search-box/search-box.md %}


## Code
### HTML
```html
  {% include /patterns/search-box/search-box.md %}
```

### SCSS
```scss
  {% include /patterns/search-box/search-box.scss %}
```

### Functionality

OnClick/OnTap/onFocus of input field, the placeholder text is cleared from view

OnClick/OnTap of button the content of the input field is sent to the search results page as the search criteria.

- *note if the user leaves the field blank, the search returns all results (there is no error state for this field)*

### Specifications

Search button uses the [primary-1 button]({{site.url}}buttons)
