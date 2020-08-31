---
layout: page
title: YouTube Feed
category: component
permalink: "/youtube-feed/"
---

## Overview of Component
The YouTube feed Consists of a title, subtitle and rows of video thumbnails of SAMHSA content. Videos are hosted on YouTube, with the most recent videos appearing up top.

### Design

{% include /patterns/youtube-feed/youtube-feed.md %}

## Code
### HTML
```html
  {% include /patterns/youtube-feed/youtube-feed.md %}
```

### SCSS
```scss
  {% include /patterns/youtube-feed/youtube-feed.scss %}
```


### Functionality
Uses YouTube API to pull in content.

Most teams have their own YouTube playlist with in the SAMHSA.gov channel -- so that can be used to constrain the list. [SAMHSA YouTube Channel](https://www.youtube.com/user/SAMHSA)

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | video thumbnail | dynamic | | | |
| 2    | video title | dynamic | | |
| 3  | duration | dynamic | format (## minutes) | | |
| 4  | dash | static | | | |
| 5  | date | dynamic | format (Month Day, Year) | | |
| 6  | play list display | authored | default - 3 | | this is how many individual videos are shown in the playlist |



### Authoring
The authoring experience should supply a simple url field for a the author to paste in their play list link from YouTube and a second field to show how many to display in module -- the default is 3. 6 Max.
