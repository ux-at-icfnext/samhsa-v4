---
layout: page
title: Treatment Locator Widget (Get Help Small)
category: component
permalink: "/treatment-locator/"
---

## Overview of Component
This is used often as a next component on content pages.

The advantage of this block is that it does take up as much page space in places where it really is a secondary task. Also, it focuses on the help lines that are most important for that page or section, while also providing the Locator search box for users.

Options for either a module with a phone number with a treatment locator box and a module with links for specific substances with the treatment locator box are provided, so that a version can be selected to best fit the needs of the page.

*Note*: This component can be paired with the [four links list]({{site.url}}four-links-list) if there are secondary help resources. (On a large screen they can be side-by-side with the help component taking up 60% of the line.)

### Design

{% include /patterns/treatment-locator/treatment-locator.md %}

## Code
### HTML
```html
  {% include /patterns/treatment-locator/treatment-locator.md %}
```

### SCSS
```scss
  {% include /patterns/treatment-locator/treatment-locator.scss %}
```


### Functionality
1) Helplines

- OnClick/On Tap of link title, system displays corresponding page
- onClick /OnTap of Phone number, system uses click-to-call functionality

2) Treatment facilities search

- On submit of search, parameters entered in search box are passed to the Behavioral Health Treatment Locator. System displays results within the locator. [https://findtreatment.samhsa.gov/locator](https://findtreatment.samhsa.gov/locator)
- This same UI was created on the DATA page and should be leveraged. → [https://www.samhsa.gov/data/](https://www.samhsa.gov/data/) (at the bottom).

### Specifications (Get Help Phone)

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | Title | h2 |
| 2    | helpline | multi-valued (see content section) | | |
| 2.1  | title | text/url link |  |   | tag for analytics |
| 2.3  | phone | phone |  |   | tag for analytics |
| 2.3  | description | text |  | | |
| 3    | treatment search | | | | |
| 3.1  | title | text | search text: Find treatment facilities confidentially and anonymously |style: bold | |
| 3.2 | search box | input field | help text: "Enter an Address, City or Zip code" | | |
| 3.3 | search button | button | button text: "Search Facilities" | | tag for analytics - id=locator. Links to search results page in the treatment locator |
| 3.4 | Learn More | URL link | Text: "Learn About Our Locator" | | links to this page: https://findtreatment.samhsa.gov/locator/about |

### Specifications (Get Help Links)

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | Title | h2 | text: Get Help | | |
| 2    | title | text | see content section below | | |
| 3    | links | URL link | | stlye: bold | |
| 4    | treatment search | | | | |
| 4.1  | title | text | Title: "Find a treatment center." | | |
| 4.2  | search box | input | search box text: "Enter your City of Zip code." | | |
| 4.3  | search button | button | button text: "Go" | | |

### Content
**Get Help Links**

**Medications that Help with Addictions**

Methadone

Link: [https://www.samhsa.gov/medication-assisted-treatment/treatment/methadone](https://www.samhsa.gov/medication-assisted-treatment/treatment/methadone)

Naltrexone

Link: [https://www.samhsa.gov/medication-assisted-treatment/treatment/naltrexone](https://www.samhsa.gov/medication-assisted-treatment/treatment/naltrexone)

Buprenorphine

Link: [https://www.samhsa.gov/medication-assisted-treatment/treatment/buprenorphine](https://www.samhsa.gov/medication-assisted-treatment/treatment/buprenorphine)

Medications that Help with Overdose

Naloxone

Link: [https://www.samhsa.gov/medication-assisted-treatment/treatment/naloxone](https://www.samhsa.gov/medication-assisted-treatment/treatment/naloxone)
