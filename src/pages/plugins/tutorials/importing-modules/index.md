# JavaScript Modules

The beauty of plugins is that it allows you to have more than just one JavaScript file. And in order to manage elaborate projects, you might want to modularize your code and manage it from separate JS files.

To make use of modules within your code, you will need a mechanism to include the modules within other files. JavaScript has never had the `#include` syntax of C and its descendants, nor the `import` of Python. Instead, the `require` statement helps you do so.

Here's how to use them:

<CodeBlock slots="heading, code" repeat="2" languages="JavaScript, JavaScript" />

#### index.js
```js
// specify the path of the JS file that has the required module
const { foo, bar } = require("./includeMe.js");
. . .
const result = foo(3); // will return 6
```

#### includeMe.js
```js
// declare the module
function foo(someNumber) {
    return(someNumber * 2);
}
function bar() {
    return(42);
}
module.exports = {
    foo,
    bar
}
```

The `require` in UXP isn't as robust as some other include systems (e.g., it doesn't search any global paths to find the file you want), but careful use of relative paths allows you to structure your plugin directory the way you want. For example, you can have a subdirectory named `lib` and require a file in there this way:

`const { foo, bar } = require("./lib/includeMe.js");`

