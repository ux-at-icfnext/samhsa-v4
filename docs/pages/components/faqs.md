---
layout: page
title: FAQs
category: component
permalink: "/faqs/"
---

## Overview of Component Group
Frequently Asked Questions (FAQs) are common questions that user may have for a website or section of a site. They are found on several pages within the SAMHSA site, including [About Us](https://www.samhsa.gov/about-us/faqs), [Children's Awareness Day Media](https://www.samhsa.gov/childrens-awareness-day/resources/digital-media-faq), [CBHSQ Restricted Data](https://www.samhsa.gov/data/faq-for-rdc), [Substance Abuse Confidentiality Regulations](https://www.samhsa.gov/about-us/who-we-are/laws-regulations/confidentiality-regulations-faqs), [BRSS TACS](https://www.samhsa.gov/brss-tacs/recovery-support-tools/peers/core-competencies-peer-workers-behavioral-health-services/frequently-asked-questions), and [Data](https://www.samhsa.gov/data/frequently-asked-questions). FAQs can show that the organization is listening and addressing its users' concerns. Since SAMHSA is primarily an information resource website, this is important.

### Design

{% include /patterns/faqs/faqs.md %}


## Code
### HTML
```html
  {% include /patterns/faqs/faqs.md %}
```

### SCSS
```scss
  {% include /patterns/faqs/faqs.scss %}
```


The design to the left is from SAMHSA's About Us section and it shows several key elements that should be included in every FAQ. The design to the right reflects best practices since it shows accordions for each answer, which is appropriate if there are many questions.

### Functionality
The FAQ section's functionality should support the user's need for information in a quickly accessible, efficient manner. The normal format is a question and then the answer to the question underneath. Best practice guidance uses [accordion]({{site.url}}accordion-filter) styling is used so that the user can quickly peruse the questions without having to look at answers for irrelevant questions, for more lengthy Q&As.

**Best Practices for Displaying FAQs:**

-Include back-to-top links at the bottom of the page if the number of questions is extensive.

-Use a bold font for questions to increase scanability and a non-bold font for the answers.

-If there are more than a few questions, employ accordions for the answers.

-If there are more than a dozen questions, or if questions are fairly diverse, use section headers.

-If there are a large number of questions, they should be organized into logical sections and an index to the sections displayed at the top of the FAQ page (as seen in the examples) with a jump link directly to each section.

**Best Practices for Writing FAQs:**

-The tone of answers should be polite, factual, credible, and reflective of SAMHSA's culture.

-Include links to resources to help the user get to comprehensive information quickly, also reducing the need for other support resources.

-Since users search the FAQ text for their problem, not the solution, ensure that the wording of questions is concise but inclusive, so that it has the language or terms that most users might use.

-Determine the best questions to include by examining search and analytics data for information that users are searching for.

-Test out draft questions and answers with typical users periodically to ensure that the FAQ is useful and comprehensive.

-Review questions and answers on a regular basis to make sure they still meet most users' information needs.

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | title | h2 |Normally the title will be "Frequently Asked Questions" |
| 2    | summary text | text | Text with a brief explanation of the area/section that the questions are about |
| 3    | index (optional) | link | jump links to section headers | Underlined links in blue according to the color styling in the Pattern Library
| 4 | section header | H3 | the name of the section, which should match the index label
| 5 | Horizontal line | | A line between the heading area and between each questions/answers
| 6 | FAQ Question Text | H3 | A question in plain language format, ending with a question mark
| 7 | FAQ Answer Text | Text | A brief by comprehensive answer, with one or more links if further informaton on the topic is available
| 8 | Scroll to Top Button (optional) | button | If there are more than a dozen questions, include a "scroll to top" button
