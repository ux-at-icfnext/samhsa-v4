---
layout: page
title: Text Box Promo with Image
category: component
permalink: "/text-box-promo-image/"
---

## Overview of Component
Text Box promo with image is a component that consists of an image, title, descriptive text and an optional link. Examples can be seen on the Recovery Month Home Page design.

### Design

{% include /patterns/text-box-promo-image/text-box-promo-image.md %}

## Code
### HTML
```html
  {% include /patterns/text-box-promo-image/text-box-promo-image.md %}
```

### SCSS
```scss
  {% include /patterns/text-box-promo-image/text-box-promo-image.scss %}
```


### Functionality
1) OnClick/OnTap of link, system displays target page

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | Title | h2 | authored, character count? |
| 2    | Text-Box-Image | Image | authored: text-box-image. authored: alt-text | floats-left. width/height 130x130. |
| 3    | Description | text | authored. Character count (?) |
| 4    | Button | url link | authored (optional) |
