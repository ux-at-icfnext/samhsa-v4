---
layout: page
title: Accordion
category: elements
permalink: "/accordion/"
---

## Overview
Accordions are a list of elements that allow for hiding and showing content when selected. This is a helpful way to group like content while still keeping the page clean and cognitively manageable. Accordions are especially useful for long forms or for smaller screen devices. A single accordion is a good way to hide content on small screens, like page filters, that would otherwise be in the way.

See more guidance from the [USWDS](https://designsystem.digital.gov/components/accordion/).

**Contents**
- [Design](#design)
- [Visual Design](#visualdesign)
- [Functionality](#functionality)
- [Accessibility](#accessibility)
- [Code](#code)

<a name="design"></a>
## Design

{% include patterns/accordion/accordion.md %}


<a name="visualdesign"></a>
### Visual design
![accordion closed](../assets/img/accordion/accordion-closed.png)
![accordion open](../assets/img/accordion/accordion-open.png)

**Visual Specs**
- Closed: #1A6986 — Line weight 1px
- Open #1A6986 - Opacity 15% - Line weight 1px


<a name="functionality"></a>
### Functionality
On each OnClick/OnTap of an accordion, it will open and close. Entire accordion should be interactive.


<a name="accessibility"></a>
### Accessibility


<a name="code"></a>
## Code
### HTML
```html
  {% include patterns/accordion/accordion.md %}
```
### SCSS
  _Note link color and styling is consistent with global styles._  
```scss
{% include patterns/accordion/accordion.scss %}
```
