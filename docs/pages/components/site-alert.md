---
layout: page
title: Site Alert
category: component
permalink: "/site-alert/"
---

## Overview
The site alert is an alert component that is exclusive to the homepage. It is used to display a prominent message. Use cases may be:
- Government Shutdown
- COVID-19 News
- Other big picture items (like FindTreatment.gov announcement)

We will be using the [USWDS component](https://designsystem.digital.gov/components/site-alert/) for the SAMHSA site.

## Functionality
The site alert should appear at the top of the homepage, below the navigation. It should not appear anywhere else on the site.

The main body text does support rich text, and can include links. Otherwise, the component is not interactive.

## design

## Specifications
Title: 60 Characters. It should be an optional field.
Body: 500 Characters. Rich Text fields. Required field.
Color:


## Code
### HTML
```html
  {% include patterns/site-alert/site-alert.md %}
```
### CSS
```scss
  {% include patterns/site-alert/site-alert.scss %}
```
