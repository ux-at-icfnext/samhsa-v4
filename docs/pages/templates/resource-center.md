---
layout: page
title: Resource Center Template
category: templates
permalink: "/resource-center/"
---

The resource center template should be used for sites that list out resources such as the Evidence Based Practices Resource Center (EBRPC) and Disaster Behavioral Health Information Series (DBHIS). The list is a filterable and searchable index that links users to publications or resources. Detail pages are available to house any resource that needs to live with in the respective center, otherwise the list will point directly to item.

## Contents
- [Page Load](#load)
- [breadcrumb](#breadcrumb)
- [Page Header](#header)
- [Search Bar](#bar)
- [Filters](#filters)
- [Search Header](#search)
- [List Item](#item)
- [pagination](#pagination)
- [Full Page Example](#example)

<a href="load"></a>
## On Page Load
When the page is first loaded, content load in an unflitered state.
- **Sort** - If available, items are sorted first by _featured_ and the by _most recent_. If _featured_ doesn't exist, sort by _most recent_. The sort drop down displays either "Featured Resources" or "Latest Resources" according to which of these two conditions apply. (see more about [sort](#search) below)
- **View** - at default 15 items are shown on page. View drop down displays "15".(see more about [view](#search) below)

<a href="breadcrumb"></a>
## Breadcrumb

Resource pages use the standard breadcrumbs. Find out more [about breadcrumbs]({{ site.url }}breadcrumb).

<a href="header"></a>
##  Page Header
![header](../assets/img/resource-center/page-header.png)

The page header consist of:
1. Page Title - H1
2. Page Description - body text
3. Navigational links - (Optional) separated by "\|".

<a href="bar"></a>
## Search Bar
![bar](../assets/img/resource-center/search-bar.png)
The search bar is centered at 70% width of the content area.
### Fields:
- Input \| Content: "Search Our Resources"
- Submit Button \| Content: "Submit"

### Functionality:
- OnClick / OnTap of button, system uses the content of the input to search the collection. The resource list is updated to show matching results
**_@Leake -- What are we searching against?_**
_(see more about [form field specifications]({{ site.url }}forms))_


<a href="filters"></a>
## Filters
TBD


<a href="search"></a>
## Search Header
