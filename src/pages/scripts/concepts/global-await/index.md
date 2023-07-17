# Global await

Global await is the way to handle asynchronous operations inside a UXP Script. 

First, let's understand asynchronous behavior. Asynchronous tasks are non-blocking in nature, which means it doesn’t block further execution while one or more operations are in progress. 

For example, texting or emailing a friend. Once you send a message, you can continue to do other tasks. You don't necessarily have to wait for a response but it's assured that you will be informed/notified when you receive a reply.

Now, let's look at some code with asynchronous behavior. In the following example, `foo` returns a value after a brief delay of 2s. The delay in the example below is simulated with the help of `settimeout` but in the real world, it could be because of anything, such as a network call to fetch some data.

```js
console.log("Start of execution.");

function delayedFoo(text) {
    setTimeout(() => {
      console.log("Greetings: Hello",
    }, 2000);
}
delayedFoo();

console.log("End of execution.");
```

You might expect the output of the above code to be

```
Start of execution
Greetings: Hello
End of execution
```

However, the actual output would be something like this

```
Start of execution
End of execution
```

What happened to the console.log inside `settimeout`? Why is it not visible? It is because 
your script was no longer alive. UXP scripts expect your code to be synchronous.

To make it work, we need to make the thread _wait_ for the async task to finish before continuing with the next statement. We can attain this by using `Promise` and `await`. (Familiarize yourself with the concepts of [promise](https://javascript.info/promise-basics) if you are not already) 

```js
console.log("Start of execution.");

async function delayedFoo() {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Greetings: Hello");
            resolve();
        }, 2000);
    });
    return prom;
}
await delayedFoo();

console.log("End of execution.");
```

```
Start of execution
Greetings: Hello // after a delay of 2s
End of execution
```

Let's go over the changes in detail:
- The await in front of `delayedFoo()` is referred to as global await. It keeps the UXP Script waiting for an async task to complete at a global scope. 
- You are allowed to have as many global awaits as you would like, but keep in mind that each `await` halts the execution, waiting for the async task to finish before moving on.
- Returning a promise from the async function lets you resolve the value at a later point in time.
- `resolve`-ing a promise is important once the asynchronous task is complete. So that the script can continue to execute the next line.

