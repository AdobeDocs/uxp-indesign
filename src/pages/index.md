---
title: Overview - Cat Analytics
description: This is the overview page of Cat Analytics
contributors:
  - https://github.com/icaraps 
---

<Hero slots="heading, text"/> 

# UXP for Adobe InDesign

UXP scripting allows developers to execute a single file to accomplish tasks in InDesign. Any action that can change a document or its contents can be scripted.

<Resources slots="heading, links"/>

#### Resources

* [Quickstart Guide](https://developer.adobe.com)
* [Cat Analytics Github Repo](https://github.com/AdobeDocs/dev-site)

## Overview

Scripts can perform all the actions that you do with the InDesign's user interface. You can draw frames, enter and format text, place graphics, and print or export the pages of the document. Any action that can change a document or its contents can be scripted. There are a few things you can do in scripting that you cannot do using the user interface.

We tend to think of scripting as a solution for long, repetitive tasks, like laying out a phone book. It also is good for things like the following:
<br />

1. Automating the myriad, small, annoying tasks that you face every day
2. Customizing InDesign to match your work habits and layouts
3. Achieving creative effects that would be difficult or impossible to attain by other means.

Scripts can create menus, add menu items, create and display dialog boxes and panels, and respond to user-interface selections. Scripts can read and write text files and parse XML data.

Scripts can do everything from small tasks (like setting a tab stop at the location of the text cursor) to providing complete features. You can start with simple scripts that do only one thing and move on to scripts that automate your entire publishing workflow.

## Power of UXP

UXP (Unified Extensibility Platform) is the modern way to create scripts and plugins for Adobe Creative Cloud products. 

UXP provides a comprehensive extensibility solution, turning modern JavaScript (ECMAScript 6) and HTML markup into controls in native application windows. UXP scripts run within the same process as the host application, with their UI in its own non-blocking thread.

UXP scripts communicate natively with the host application; there is no boundary between JavaScript and UXPScript that requires passing strings back and forth.

## UXPScript vs ExtendScript

ExtendScript uses a charming, yet antiquated version of JavaScript (ES3), from the era when JavaScript was coded on punched cards. In contrast, UXP uses the V8 JavaScript engine which supports ES6; this has several notable features lacking in ExtendScript. Not all the newer features are used and/or supported in the UXP world, but as an ExtendScript developer you'll see enough puzzling syntax in UXP examples that you should familiarize yourself with ECMAScript ES6 (the standards body name for JavaScript) so you can understand the sample code.

A full introduction to ES6 features and syntax is beyond the scope of this documentation. You can find many websites that discuss ES6 features, including the popular Mozilla Developer Network. Make sure you understand at least these language features, modern JavaScript code you pick up from around the web:
<br />

* ["const" and "let" declarations vs "var"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Promises and asynchronous functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
* [Anonymous functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)


## Discover 

<DiscoverBlock width="100%" slots="heading, link, text"/>

### Get Started

[Quickstart Guide](guides/)
    
Get started with the Cat Analytics APIs.

<DiscoverBlock slots="heading, link, text"/> 

### Guides

[Calculated Metrics API](guides/calculated_metrics_api/) 
     
Returns information on the user's company that is necessary for making other Cat Analytics API calls.

<DiscoverBlock slots="link, text"/>

[Segments API](guides/segments_api/) 

Provides configuration guidance and best practices for the /segments endpoint.

<DiscoverBlock slots="link, text"/>

[Reporting Guide API](guides/reporting_api/)

Provides configuration guidance and best practices for the /reports endpoint.

<DiscoverBlock slots="link, text"/>

[Migrating from 1.4 to 2.0](guides/migrating/)

For help migrating from the 1.4 versions of the Analytics API to the newer and more capable /reports API.   

<DiscoverBlock width="100%" slots="heading, link, text"/>

### API References

[Try the API](api/) 

Try the Analytics API with Swagger UI. Explore, make calls, with full endpoint descriptions.

## Contributing 

We encourage you to participate in our open documentation initiative, if you have suggestions, corrections, additions 
or deletions for this documentation, check out the source from [this github repo](https://github.com/adobe/gatsby-theme-spectrum-example), and submit a pull 
request with your contribution. For more information, refer to the [contributing page](support/contribute/).

## API Requests & Rate Limits

The timeout for API requests through adobe.io is currently *60 seconds*.

The default rate limit for an Cat Analytics Company is *120 requests per minute*. (The limit is enforced as *12 requests every 6 seconds*).
When rate limiting is being enforced you will get `429` HTTP response codes with the following response body: `{"error_code":"429050","message":"Too many requests"}`    