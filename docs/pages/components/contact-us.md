---
layout: page
title: Contact Us Widget
category: component
permalink: "/contact-us/"
---

## Overview of Component Group
This component optionally appears on pages where users have the opportunity to receive help from the agency team. Uses the Drupal "Contact Form" module as modal on-page.

### Design

{% include /patterns/contact-us/contact-us.md %}

## Code
### HTML
```html
  {% include /patterns/contact-us/contact-us.md %}
```

### SCSS
```scss
  {% include /patterns/contact-us/contact-us.scss %}
```

### Functionality
If the contact has a button, link to a form.

1) OnClick/OnTap of button, system displays contact form in an overlay popup.

Contact Us may also contain a email address and/or phone number.

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
|0 | background |  |  | color=$silver
| 1    | title | h3 | "Contact Us" |
| 2    | description | rich text | required |  | default text may be - "Need assistance? Contact the ____ team with your questions." |
| 3    | contact us button  | button/URL | optional, authored: character limit = 30 | secondary-button-1 | If unedited, this should say "Contact Us"|

### Contact Form Specifications

Uses Drupal core module ([Contact Form](https://www.drupal.org/docs/8/core/modules/contact/overview)).

Form is completely author-able.

Default form contains: Name, Email, Question text box. These fields are required.

On Successful Submission, a success message is shown: "Thank you for your information."

If feasible, the success message also includes a time frame for contact back to the user, such as "The ____ team will respond to you within `n` days/hours."
