---
layout: page
title: Error Messages
category: component
permalink: "/error-messages/"
---

## Overview of Component Group
Since SAMHSA is primarily an informational website, and most users do not conduct transactions on it, there not many forms or input opportunities that could trigger user errors. But for the several input forms on SAMHSA, well-crafted error messages are essential to direct the user to quickly and efficiently correct any errors. This document includes best practices to make error messaging consistent throughout SAMHSA.

Generally, the error message will be contained on the same page where the user entered data, but sometimes it may occur on a popup or the user may be taken to another page. It is preferable that the user be able to stay on the same page for error notification and to fix any errors right there.

Note that this section does not discuss the more common browser error messages or those that originate when a link to a resource is broken. An example would be a '404' message informing the user about that broken link.

### Design

{% include /patterns/error-messages/error-messages.md %}


## Code
### HTML
```html
  {% include /patterns/error-messages/error-messages.md %}
```

### SCSS
```scss
  {% include /patterns/error-messages/error-messages.scss %}
```
Note in the left example that there is both a **page-level** (form-level) error display "Email Address field is required." and a **field-level** error display "You must enter a valid email address."

The page-level display informs the user of all validation errors in a list format and the field-level display highlights each field(s) with errors and also tells the user what to do to correct them. The red box highlights exactly where the user needs to go, decreasing the user's cognitive load and speeding correction of the error.

The second example at the right combines the two error types but makes it more difficult for the user to know where to go to fix the error. Although this form only contains two input fields, using this format for forms with more fields makes the error correction task more difficult for the user.

### Functionality
**Best practices to keep in mind when *designing* the error message interface:**

-Don't display error messages while the user is typing into the input field box, but instead display field-level error messages immediately after the user finishes their input into the box.

-Present the error message in multiple parts (both at the page level and at the field level) for maximum visibility.

-After the user hits the Submit button, preserve as much as the user's work as possible, so that the user only has to fix the incorrect fields.

-For a multipart form, list all errors together, so that users can see how many corrections they need to make and make one error submission.

-If appropriate, show the user's original input (even though incorrect) to facilitate revisions.

-If possible, let users pick from a short list of possible fixes. For example, instead of saying "City and zip code don't match," let users click on a drop down for the city that matches the zip code they entered.

**Best practices when *writing* error message text:**

-Be constructive to help the user clear the error, and be as clear and concise as possible about the specific issue.

-Follow plain language guidelines so that the user can easily discern what to do.

-Use a helpful tone, and don't blame the user for causing the error.

-Explain why the error occurred rather than just stating that there is an error. If necessary, state the impact of the error, such as an inability to process the form without that information.

-Address the user as "you" instead of an impersonal term (like "subscriber" in the example above).

-Avoid negative or harsh words in the text and use active voice.

-Don't use technical jargon, code numbers or other terms that will not be known to the typical user.

-Provide direction to the user on how to fix the problem, either by telling the user what is missing, the correct format, or resources to use to fix the problem.

-Avoid using all uppercase text in the message, or graphics that seem alarming.

### Specifications

| ID   | Name | Field Type  | Content | Visual | Notes |
|------|------|-------------|---------|--------|-------|
| 1    | Page- (or form-) Level Error Message | This should appear at the top of the form and the user should be taken to top of the form as soon as they have submitted the form. | This should appear prominently at the top of the page and the display all errors that appear on the form. | Use an "X" icon as shown, along with pale grey #eeeeee for the background. |
| 2    | Field Level Box| A red-rimmed box should surround the field(s) in error. This allows the user to be directed quickly to the field(s) that require attention. | | Use red #CD3835 for the box rim.|
| 3    | Field-Level Error Description | The error description briefly tells the user what the problem is, but more importantly, tells the user what to do to fix it. That may include correcting data that has been entered, getting assistance from a technical support group, or trying again later. | The error message should appear directly below the field with an error. See the information above about writing error messages. |
| 4 | Submit Button (ancillary element) | The button allows the user to re-enter and correct the information they were trying to enter, or return to the previous page if the error is a popup. | See the Button pattern for more information.
