## UXP Script vs ExtendScript

There are a few things you can do in scripting that you cannot do using the user interface. Scripts can create menus, add menu items, create and display dialog boxes and panels, and respond to user-interface selections. Scripts can read and write text files and parse XML data. 

UXP provides a comprehensive extensibility solution, turning modern JavaScript (ECMAScript 6) and HTML markup into controls in native application windows. UXP scripts run within the same process as the host application, with their UI in its own non-blocking thread.

UXP scripts communicate natively with the host application; there is no boundary between JavaScript and UXP Script that requires passing strings back and forth. ExtendScript uses an antiquated version of JavaScript (ES3), from the era when JavaScript was coded on punched cards. In contrast, UXP uses the V8 JavaScript engine which supports ES6; this has several notable features lacking in ExtendScript. Not all the newer features are used and/or supported in the UXP world, but as an ExtendScript developer you'll see enough puzzling syntax in UXP examples that you should familiarize yourself with ECMAScript ES6 (the standards body name for JavaScript) so you can understand the sample code.

A full introduction to ES6 features and syntax is beyond the scope of this documentation. You can find many websites that discuss ES6 features, including the popular Mozilla Developer Network. Make sure you understand at least these language features, modern JavaScript code you pick up from around the web:
<br />

* ["const" and "let" declarations vs "var"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Promises and asynchronous functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
* [Anonymous functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

