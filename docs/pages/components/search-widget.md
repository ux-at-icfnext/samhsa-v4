---
layout: page
title: Search Widget
category: component
permalink: "/search-widget/"
---
## Overview of Component Group
The Search Widget is used in in-page searches on the website. Two examples of this are the EBRC and DBHIS pages, which each have a search box of their own, in addition to the site-wide search box. They both also have filtering of the search results.

## Design

{% include /patterns/search-widget/search-widget.md %}


## Code
### HTML
```html
  {% include /patterns/search-widget/search-widget.md %}
```

### SCSS
```scss
  {% include /patterns/search-widget/search-widget.scss %}
```

### Functionality

Some functionality may depend on the search engine (such as Mindbreeze or Solr) being used on the site. The overall functionality begins when the user enters text into the Search Box and hits or taps the Search button. This causes the search engine to use the user's text to find matching content. The results are listed in the section entitled "Your Search Results" (this text may vary by page) and the user can examine the resulting information.

OnClick/ OnTap of the Search button, the user's search criteria from the Search Box Input Field is sent to the search results engine. If the user has left the input field blank, the search results criteria includes all content, sorted by the most recent published date.

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | search box input field | input field | grey text in box is "search" |
| 2    | search button | button | see button element | | search boxes on SAMHSA do not employ the "looking glass" search icon. |
| 3   | sort by dropwdown | dropdown | On selection of a Sort by choice, the resulting set is re-ordered by the chosen method; Text: “Sort by” with choices for organizing results. Choices are: Most recent, Alphabetical A-Z, Alphabetical Z-A | | The sort default is publication/posted date for the resource; Note that the sort choices may vary for other pages |
| 4   | view by dropdown | dropdown | text "View by" and dropdown with choices 25, 50, 100 |
| 5   | search total | numberic text | This represents the total resources that the search produced in numeric format ("15" rather than "fifteen") |
| 6   | Search Results | Resource title, Text description, link | Text header is"Your Search Results" (this text may vary by page). | | The items included here are for the EBRC example, but may vary for other pages, if there is a need for additional results data to be displayed | 
