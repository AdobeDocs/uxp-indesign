---
title: Prerequisites for UXP
description: Set of tools and programming languages developers should know before developing in UXP
keywords:
  - Tech stack
  - Prerequisites
  - Programming languages
  - System requirements
  - Frameworks setup
contributors:
  - https://github.com/padmkris123
---

# Programming languages

As mentioned earlier, UXP is a modern JavaScript (ECMA2015 or ES6) based extensibility platform. 

To begin, a little bit of knowledge of web technologies, such as JavaScript, HTML, and CSS, is required. There are some great materials available on the web that can teach you the basics but here are some of our recommendations. Feel free to use other sources to read about these topics.  

<InlineAlert slots="text1, text2" />

Please remember that since JavaScript, HTML or CSS are the foundational web technologies, online tutorials often assume that you are about to use them in a browser or a server-side JS engine. 

UXP is **not** a full-blown browser or server-side JS engine like NodeJS. Though it allows you to use the same syntax, it does not intend to behave like a browser and consequently will support only a subset of the web APIs. This means, not all the HTML Elements or CSS classes or JavaScript APIs will be available in the UXP world. 

## System requirements
Your system must meet these minimum requirements for [InDesign](https://helpx.adobe.com/in/indesign/system-requirements.html) and [InDesign Server](https://helpx.adobe.com/indesign/kb/system-requirements-indesign-server.html) applications.

## Reading material
Start by getting acquainted with the basics of JS, HTML, and CSS.

- [Introduction to JavaScript](https://javascript.info/intro) and its [basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [JavaScript versions](https://www.w3schools.com/js/js_versions.asp) and [ECMA2015 (or ES6)](https://www.w3schools.com/js/js_es6.asp)
- [HTML Basics](https://www.w3schools.com/html/html_intro.asp)
- [CSS Basics](https://www.w3schools.com/css/css_intro.asp), [syntax](https://www.w3schools.com/css/css_syntax.asp), and [selectors](https://www.w3schools.com/css/css_selectors.asp)

Apart from the basics, the following additional topics will also come in handy. You need not go through each of them right away, but do bookmark them for later as it will help you understand the code snippets much more easily. 

- [Document Object Model or HTML DOM](https://eloquentjavascript.net/14_dom.html) and the global [window](https://www.w3schools.com/jsref/obj_window.asp) and [document](https://www.w3schools.com/jsref/prop_win_document.asp) object
- [DOM Events](https://javascript.info/introduction-browser-events)
- [Adding CSS](https://www.w3schools.com/css/css_howto.asp)
- [CSS layout using flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Promise](https://javascript.info/promise-basics)
- [Async/await](https://javascript.info/async-await)
- Different ways of declaring JS functions - [traditional style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) vs using the [fat arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Chrome debug tool (CDT)
One of the easiest ways to debug these technologies is by using the Chrome Debug Tool. We will be using the same within our developer tool called UDT, which stands for the UXP Developer Tool. A high-level understanding of CDT will be very useful for you later.

Please familiarize yourself with the [Chrome Debug tool](https://developer.chrome.com/docs/devtools/overview/), especially the ways to [access DOM](https://developer.chrome.com/docs/devtools/dom/), [modify CSS](https://developer.chrome.com/docs/devtools/css/) and [debug JS](https://developer.chrome.com/docs/devtools/javascript/) by adding breakpoints.

## Frameworks
So far we have spoken about plain JS, HTML, and CSS. However, the industry offers various frameworks that act as an abstract layer on top of these web technologies. These frameworks aim to provide you with a quicker, and more efficient way of writing reusable code.
 
React, Vue, and Svelte are some of the popular frameworks, that developers often find useful. To use such frameworks is optional and is your personal choice. But, since these are one layer above the plain web technologies, you would require additional tools to run such projects.

- [Node.js](https://nodejs.org/en/): a JavaScript runtime environment. It's often used as a backend server in web environments. Go to the [Node.js download page](https://nodejs.org/en/download/), download the installer for your platform, and run it. This will also install `npm`.
- [npm](https://www.npmjs.com): a "package manager" bundled with Node which helps manage your project's dependencies (i.e., other code and files that are needed to make your plugin work).
- [yarn](https://yarnpkg.com): a "better" package manager than npm for Node. To install yarn you'll need to have npm installed first (see above). After that, use this command:

```bash
npm install yarn --global
```
