<!-- Status -->
<TitleBlock slots="heading, text" theme="light" />

### Status: Needs work

Author: UXP team (@sujai) <br></br>
Reviewer: <br></br>
<!-- End of status -->


#

<!-- Pre requisite 
(Link to Resources -> Fundamentals) -->

We recommend that you get familiar with the terminology and fundamentals first, lets look at some more concepts you should know about while writing scripts.

## promise and await
aka Global await
<!--- Describe under what circumstances would a developer need to use promise and await. What happens when I dont use it? -->

```js
//async function which resolves promise after wait of 3 seconds
async function delayedResolve() {
    console.log("Starting delayedResolve");
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Timeout Finished");
          resolve();
        }, 3000);
    });
    console.log("Returning Promise and exiting delayedResolve ...");
    return prom;
}

await delayedResolve();
console.log("End of Execution..!");
```


## Without await
<!--- Describe under what circumstances would a developer need to use promise and NO await. What happens when I dont use it? -->

```js
//async function which resolves promise after wait of 3 seconds
async function delayedResolve() {
    console.log("Starting delayedResolve");
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Timeout Finished");
        resolve();
        }, 3000);
    });
    console.log("Returning Promise and exiting delayedResolve ...");
    return prom;
}


delayedResolve();
console.log("End of Execution..!");
```
