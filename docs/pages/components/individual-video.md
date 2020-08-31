---
layout: page
title: Individual Video
category: component
permalink: "/individual-video/"
---

## Overview of Component Group
This component is used to pull YouTube videos from the SAMHSA YouTube channel to embed on the SAMHSA website.

### Design

{% include /patterns/individual-video/individual-video.md %}

## Code
### HTML
```html
  {% include /patterns/individual-video/individual-video.md %}
```

### SCSS
```scss
  {% include /patterns/individual-video/individual-video.scss %}
```

### Functionality
Onclick/Ontap of Individual Video will play the embedded YouTube clip. Consecutive Onclick/OnTap will pause the video.

Onclick/Ontap of video title will send user to the video hosted on the SAMHSA YouTube channel.

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | YouTube API Video |  | | | Video pulled in from YouTube API
| 2    | Title | URL link | | Bold text. Use external link font-awesome icon.
| 3    | Time | Text (mm) | Display total playtime in minutes
| 4    | Date | month, dd, yyyy |
