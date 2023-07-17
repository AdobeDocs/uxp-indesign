# Script lifespan
UXP scripts, like JavaScript, are single-threaded and non-blocking. It lives until the last statement in the execution stack.  

Let's understand this with a very simple example.

<CodeBlock slots="heading, code" repeat="2" languages="JavaScript, Text" />

#### sample.idjs
```js
function foo() {
    console.log("Start of execution.");
    console.log("Greetings: Hello");
    console.log("End of execution.");
}

foo();
```

#### Output
```
Start of execution
Greetings: Hello
End of execution
```

In the above code, the script is considered to be complete or done once it executes the last line. It is no longer is alive after the last line - "End of execution". This is the standard way in which how JavaScript execution stack work. Learn about the [execution stack](https://www.javascripttutorial.net/javascript-call-stack/), if you are not already familiar with it. 

<InlineAlert variant="info" slots="text1, text2"/>

**Pro tip**

While debugging your scripts, adding a breakpoint to the last statement will help in seeing all the `console.logs` before they disappear when the script completes and debug window closes.


The above example also showcases pure synchronous operations. Such operations are always executed sequentially.

However, things are a little complicated when we speak about asynchronous tasks. An async task usually happens at a later point in time and the execution thread doesn't wait around for it to complete. (If you are not familiar with synchronous/asynchronous operations in JavaScript, here's an article that explains the [difference](https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/))

Since UXP scripts only live until it reaches the last statement in the call stack, they may no longer be alive, for the asynchronous tasks to execute at a later point in time. Almost as if it expects your code to be synchronous at all times.

We understand that in real-world use cases, this is not possible. A network call is asynchronous and it may take a few seconds for it to resolve. And the script should wait for such operations somehow. So how do we handle such scenarios? By using `global await`, which makes asynchronous code behave like synchronous operations. We will learn about it in the next section.
