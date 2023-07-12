# Script lifespan
UXP scripts, like JavaScript, is single-threaded and non-blocking. It lives until the last statement in the execution stack.  

Let's understand this with very simple examples.

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

Notice the output. It is pretty straightforward, but the important thing to know is that the script is considered complete once it reaches the last line "End of execution". 

<InlineAlert variant="info" slots="text"/>

While debugging your scripts, adding a breakpoint to the last statement will help in seeing all the `console.logs` before they disappear when the script completes and debug window closes.


Slightly modifying the above example by adding another function produces the same output.

```js
//sample.idjs
function foo() {
    console.log("Start of execution.");
    bar();
    console.log("End of execution.");
}

function bar() {
    console.log("Greetings: Hello");
}

foo();
```

Output
```
Start of execution
Greetings: Hello
End of execution
```

The above examples showcase pure synchronous operations. Such operations are always executed sequentially.

However, things are a little complicated when we speak about asynchronous tasks. The execution thread doesn't wait around for async tasks. An async task usually happens at a later point in time. (If you are not familiar with synchronous/asynchronous operations in JavaScript, here's an article that explains the [difference](https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/))

UXP Scripts, too, do **not** wait for asynchronous tasks. However, there is one key difference. Since UXP scripts only live until it reaches the last statement in the call stack. it may longer be alive, for the asynchronous tasks to execute at a later point in time. 

UXP Scripts almost expect your code to be synchronous at all times. 

We understand that in real-world use cases, this is not possible. A network call is asynchronous and it may take a few seconds for it to resolve. And the script should wait for such operations somehow. So how do we handle such scenarios? By using `global await`, which makes asynchronous code behave like synchronous operations. We will learn about it in the next section.
