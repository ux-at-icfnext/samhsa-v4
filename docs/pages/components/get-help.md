---
layout: page
title: Get Help Widget
category: component
permalink: "/get-help/"
---

## Overview of Component Group
"Get Help" is a component that offers description, links and a search option for users. It has a horizontal and vertical design that includes the same information. A condensed version of this component is Treatment Locator Widget (Get Help Small).

### Design

{% include /patterns/get-help/get-help.md %}

## Code
### HTML
```html
  {% include /patterns/get-help/get-help.md %}
```

### SCSS
```scss
  {% include /patterns/get-help/get-help.scss %}
```

### Functionality
1) Helplines

- OnClick/On Tap of link title, system displays corresponding page
- onClick /OnTap of Phone number, system uses click-to-call functionality

2) Treatment facilities search

- On submit of search, parameters entered in search box are passed to the Behavioral Health Treatment Locator. System displays results within the locator. [https://findtreatment.samhsa.gov/locator](https://findtreatment.samhsa.gov/locator)
- This same UI was created on the DATA page and should be leveraged. → [https://www.samhsa.gov/data/](https://www.samhsa.gov/data/) (at the bottom).

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | title | h2 |
| 2    | help line | multi-valued (see content section below) |
| 2.1    | title | text/link |
| 2.2    | phone | phone |
| 2.3    | description | text |
| 3      | treatment search |
| 3.1    | title | text | | style: bold|
| 3.2    | search box | input | help text: "Enter an Address, City, or ZIP code" |
| 3.3    | search button | button | Button text: "Search Facilities" | | tag for analytics - id=locator links to search results page in the Treatment locator |
| 3.4 | learn more | text/link | Text "Learn About Our Locator" | | links to this page: [Locator About](https://findtreatment.gov/#home-learn-more) |

### Content
*Helpline Item 1:*

Helpline Title: **National Suicide Prevention Lifeline**

Helpline Phone: **1-800-273-TALK (8255)**

Helpline Description: Free and confidential support for people in distress, 24/7

Helpline Link: [https://suicidepreventionlifeline.org/](https://suicidepreventionlifeline.org/)

*Helpline Item 2:*

Helpline Title: **Disaster Distress Helpline**

Helpline Phone: 1-800-985-5990

Helpline Description:

Immediate crisis counseling related to disasters, 24/7.

Helpline Link: [https://www.samhsa.gov/find-help/disaster-distress-helpline](https://www.samhsa.gov/find-help/disaster-distress-helpline)

*Helpline Item 3:*

Helpline Title: **National Helpline**

Helpline Phone: **1-800-662-HELP (4357)**

Helpline Description: Treatment referral and information, 24/7.

Helpline Link: [https://www.samhsa.gov/find-help/national-helpline](https://www.samhsa.gov/find-help/national-helpline)

----

*Find treatment:*

Search Text: Find treatment facilities confidentially and anonymously.

Search Box: Enter an Address, City, or ZIP code

Search Button: Search Facilities

Learn More: Learn About Our Locator
