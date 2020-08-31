---
layout: page
title: Location Filter
category: component
permalink: "/location-filter/"
---
## Overview of Component Group
The location filter is made using a [multi-level accordion]({{site.url}}multi-level-accordion-filter). But it has some special features to make it usable for housing the longer list items of States and Tribes.

## Design
**Example:**
Here the Location filter is shown in open state

The National Filter is a select toggle. The definition of National is content that contains all of the United States. (This is different than all-states which would be a collection of items from each state.) If the National filter is one, all other filters are grayed out — with 0 counts

The States accordion is also shown in open states. Both the States and the Tribes filters have search functionality embed to help the user get quickly to their chosen state or tribe. The items to select are shown using a select toggle. A maximum of 10 are displayed with the ability to then scroll the section. (This treatment works the same across device sizes)

{% include /patterns/location-filter/location-filter.md %}

## Code
### HTML
```html
  {% include /patterns/location-filter/location-filter.md %}
```

### SCSS
```scss
  {% include /patterns/location-filter/location-filter.scss %}
```

### Functionality

**Accordions:**

OnLoad all accordions are in the closed position

OnTap/Click of of accordion item, that item opens to display inner content.

OnTap/Click again, the item closes to hide content.

**Select Toggles:**

OnClick/OnTap of filter the result set refreshes to show the items that match the filter item.

- During refresh, a loading icon is displayed to let the user know that the page is loading
- Filter list is updated to show the new counts of each filter (in other words, there are X number of items that are remaining in the rest of the filters that are also tagged by the current applied filters)
- Once loaded, the filter show display in the (applied) state, and should be listed as one of the applied filters.

### Location Schemas

**States**
- Alabama
- Alaska
- Arizona
- Arkansas
- California
- Colorado
- Connecticut
- Delaware
- Florida
- Georgia
- Hawaii
- Idaho
- Illinois Indiana
- Iowa
- Kansas
- Kentucky
- Louisiana
- Maine
- Maryland
- Massachusetts
- Michigan
- Minnesota
- Mississippi
- Missouri
- Montana
- Nebraska
- Nevada
- New Hampshire
- New Jersey
- New Mexico
- New York
- North Carolina
- North Dakota
- Ohio
- Oklahoma
- Oregon
- Pennsylvania
- Rhode Island
- South Carolina
- South Dakota
- Tennessee
- Texas
- Utah
- Vermont
- Virginia
- Washington
- West Virginia
- Wisconsin
- Wyoming

**Territories**
- American Samoa
- Guam
- Northern Mariana Islands
- Puerto Rico
- U.S. Virgin Islands

**Regions**
- Region 1 - Boston
- Region 2 - New York
- Region 3 - Philadephia
- Region 4 - Atlanta
- Region 5 - Chicago
- Region 6 - Dallas
- Region 7 - Kansas City
- Region 8 - Denver
- Region 9 - San Francisco
- Region 10 - Seattle
