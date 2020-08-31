---
layout: page
title: Testimonials
category: component
permalink: "/testimonials/"
---

## Overview of Component
The testimonials component currently shows up on a [BRSS TACS](https://www.samhsa.gov/brss-tacs/training-technical-assistance) page and might be used on other SAMHSA pages in the future.

In this context, testimonials are statements made about a SAMHSA program, event, webinar, or materials. On the BRSS TACS page, the testimonials are displayed at the bottom of the page in text like any other content and with no distinctiveness as to this special content type. The pattern below offers a way to highlight testimonials within the web page.

The example shows three testimonials, but if there are more than three testimonials that the SAMHSA client wants to display, the testimonials will display in a randomized order, so that the user may see a different set of testimonials when returning to the site.

Note that the entire testimonial section should be surrounded by a thin grey line, as seen in the design mockup, and a thin grey line should appear between the testimonial text.

### Design

{% include /patterns/testimonials/testimonials.md %}

## Code
### HTML
```html
  {% include /patterns/testimonials/testimonials.md %}
```

### SCSS
```scss
  {% include /patterns/testimonials/testimonials.scss %}
```

Version 1: The BRSS TACS example Default Content Page (T4.1) template can be used as the model for how the Testimonials section should display, with modifications per the specifications above and the example below. This first version assumes that the testimonials will randomly appear, and the user may see a different set each time they enter this page.

Version 2: If the SAMHSA client prefers only two testimonials to be shown, with a Read More button to an additional page, you may use this version, with an additional Read More page with the remaining testimonials.

### Functionality
The "four link list" has up to four, clickable in-line links to other webpages.

1) OnClick/OnTap of each link, website will display designated page URL

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | Section Title | h2/static | Title = Feedback About <Program Name>; the character limit is 100 characters; if the program name is lengthy, it may wrap over to the next line | |  Text for the title will vary depending on what the SAMHSA SME wants and the section of the site being referred to |
| 2    | Introductory Text | h3/static | This brief introductory text should explain what people are commenting on, such as a SAMHSA event, program, etc. | The character limit is 300 characters for the intro text, which is not surrounded by quotes | This text is authored by the SAMHSA SME responsible for this section of the site |
| 3    | Testimonial Text | h3/static | The text quote that constitutes the testimonial; the character limit is 300 characters per testimonial, surrounded by quotes; no more than 3 testimonials should appear for version 1 and 2 testimonials for version 2 - see notes about randomization | The large bolded quotes around the text should originate from the template's use of font-awesome large quote marks, not the text; these testimonials are randomized if there are more than three | For version 1, randomize the testimonials so that different sets appear as users view the screen. This has the effect of automatically loading more information but doesn't include the burden of an additional page |
| 4    | Testimonial's Source's Name or Substitute Name | h3 / static | The name or avatar name or position title of the person providing the testimonial | Maximum of 200 characters per full name or substitute, which will display to the right of the Testimonial Text, as seen in the mockup | The SAMHSA SME should decide on whether people's actual names, part of the names or avatars or position titles will be used; a professional title may also be used after the person's name, such as "M.D."; all testimonials in the same location should ideally have a consistent format |
| 5    | Date (optional) | h3/date | (optiona) Date | MM/DD/YYYY, for example 08/02/2019, which will appear under the Name | If important to the testimonial, the SAMHSA SME will determine if a date should be included; this adds authenticity to the testimonial but requires frequent updating of content to keep it current |
| 6    | Quote Marks | N/A / static | Use the font-awesome large quote marks at [https://fontawesome.com/icons?d=gallery&q=quote](https://fontawesome.com/icons?d=gallery&q=quote) | An aria label should describe these quote graphics | See mockup examples |
| 7      | Read More Link | h3/link | (Optional) Link to additional testimonials | If the SAMHSA SME/client has many testimonials that they want to display, show two testimonials with a Read More link to a page with additional testimonials | Use for version two design; use an aria label to describe this link |

### Authoring
The SAMHSA SME/client will determine the title, introductory text and the format for the testimonials (including real names or titles, dates, etc.). After that, they need to decide if they want to display more than three testimonials and supply all testimonials to the OC Web team. Periodic updating of the content is needed to keep it looking accurate and fresh.
