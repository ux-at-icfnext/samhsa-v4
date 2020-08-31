---
layout: page
title: Announcement
category: component
permalink: "/announcement/"
---

## Overview of Component Group
Announcement is a component that can appear on the Programs Home Page (T2). It is an optional component that displays news to the user.

### Design

{% include /patterns/announcement/announcement.md %}

## Code
### HTML
```html
  {% include /patterns/announcement/announcement.md %}
```

### SCSS
```scss
  {% include /patterns/announcement/announcement.scss %}
```


### Functionality
OnClick/OnTap of link, system displays target page.

If there are no Announcements, then module does not display.

Announcements may have a time limit and after the expiration date, they are removed from display on the site.

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | date | date (month, dd, yyyy) |
| 2    | list item | text | 50-60 characters between 1-4 links |
| 3    | description | text | 200 characters | | Optional -- if there is no link then button does not show. The aria-label should be "Find Out More about the xxx (brief description of topic)" |
| 4    | announcement button | button |
| 5    | expiration date | date |  |  | This date does not display on the site
| 6    | aria-label | text | 25 characters |  | See note in Announcement button section
