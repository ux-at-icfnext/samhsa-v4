---
layout: page
title: Related Resources
category: component
permalink: "/related-resources/"
---

## Overview of Component Group
On some SAMHSA pages, there is a group of resources that are available for the user. Often, the resources are from external sources or from another SAMHSA group. The resources are presented as a card on a carousel since there are generally multiple resources.

### Design

{% include /patterns/related-resources/related-resources.md %}

## Code
### HTML
```html
  {% include /patterns/related-resources/related-resources.md %}
```

### SCSS
```scss
  {% include /patterns/related-resources/related-resources.scss %}
```

### Functionality
For the mobile version, only one card displays but for the desktop version three cards display at a time, and the user uses the slider bar to move to additional resource cards. The carousel is fully responsive. The minimum width of a card is 320 pixels. Visit the [card component]({{ site.url }}card) for further information. (See Jira ticket No. 3677.)

OnClick/OnTap of arrows, cards will move once at time to the right or left.

   - On the first slide, the left arrow is disabled.

   - On the last slide, the right arrow is disabled.

**Mouse (Touchpad) devices**

   - User is able to us swipe or scroll to move the carousel left or right

**Touch devices**

   - User is able to use a swipe motion to move the cards right or left

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | Graphic | Picture or photo illustrating the resource in some way, in a thumbnail image | Each card should have a unique graphic to help users select one quickly | 320 pixels wide |
| 2   | Card Title | 2 lines of text indicating what the resource is | Each card should have a unique title to help users select one quickly | Limit of 50 characters including spaces |
| 3    | Card Description | Up to 5 lines of text description indicating a few more details about the resource | | Limit of 120 characters including spaces |
| 4    | Carousel Control | Carousel with left and right arrows and slicer bar | | The width of the bar will respond to the width of the device |

### Authoring
The SAMHSA client SMEs will supply all resource graphics and text for cards. Additionally, the order of resources in the carousel should be specified.

- Title: character limit 50
- Body: character limit 120
- Thumbnail: width = 100%, height = auto, alt text = null
- Title: character limit 50
- Body: character limit 120
- Thumbnail: width = 100%, height = auto, alt text = null
- Title: character limit 50
- Body: character limit 120
- Thumbnail: width = 100%, height = auto, alt text = null
